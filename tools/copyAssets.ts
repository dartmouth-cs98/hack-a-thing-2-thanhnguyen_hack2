// Credits: https://developer.okta.com/blog/2018/11/15/node-express-typescript

import * as shell from "shelljs";

// Copy all the view templates
shell.cp("-R", "src/views", "dist/");
