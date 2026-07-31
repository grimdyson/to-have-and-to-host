import { createHash } from "node:crypto";
import process from "node:process";

if (!process.stdin.isTTY || !process.stdin.setRawMode) {
  console.error("Run this command in an interactive terminal: npm run password:hash");
  process.exit(1);
}

const readSecret = (prompt) =>
  new Promise((resolve, reject) => {
    let value = "";
    process.stdout.write(prompt);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    const cleanup = () => {
      process.stdin.off("data", onData);
      process.stdin.setRawMode(false);
      process.stdin.pause();
    };

    const onData = (key) => {
      if (key === "\u0003") {
        cleanup();
        process.stdout.write("\n");
        reject(new Error("Password generation cancelled."));
        return;
      }

      if (key === "\r" || key === "\n") {
        cleanup();
        process.stdout.write("\n");
        resolve(value);
        return;
      }

      if (key === "\u007f" || key === "\b") {
        if (value.length > 0) {
          value = value.slice(0, -1);
          process.stdout.write("\b \b");
        }
        return;
      }

      if (!key.startsWith("\u001b")) {
        value += key;
        process.stdout.write("•");
      }
    };

    process.stdin.on("data", onData);
  });

try {
  const password = await readSecret("Wedding-site password: ");
  if (password.length < 8) throw new Error("Use at least eight characters.");

  const confirmation = await readSecret("Confirm password: ");
  if (password !== confirmation) throw new Error("The passwords did not match.");

  const hash = createHash("sha256").update(password, "utf8").digest("hex");
  console.log("\nAdd this value to PUBLIC_SITE_PASSWORD_HASH locally and in Vercel:\n");
  console.log(hash);
  console.log("\nThe plaintext password was not saved.");
} catch (error) {
  console.error(`\n${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
