const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-micro-fe/runtime.js",
    "./dist/angular-micro-fe/polyfills.js",
    "./dist/angular-micro-fe/main.js",
  ];
  await concat(files, "./dist/angular-micro-fe/micro-fe.js");
})();
