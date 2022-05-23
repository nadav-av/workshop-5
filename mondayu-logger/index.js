import { Console } from "console";
import { createWriteStream } from "fs";

// step 1: use this example: https://melvingeorge.me/blog/save-logs-to-files-nodejs
// export your monday logger here
export const fileLogger = new Console({
  stdout: createWriteStream("normalStdout.txt", { flags: "a" }),
  stderr: createWriteStream("errStdErr.txt", { flags: "a" }),
});

fileLogger.log("nadav");

// step 2: rename the package and publish
