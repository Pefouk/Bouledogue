function build() {
  console.log("Building bouledogue...");
  var sass = require("node-sass");
  sass.render({
    file: "./scss/bouledogue.scss",
  });
  console.log("done building bouledogue, bark 🐶");
}

for (var i = 0; i < process.argv.length; i++) {
  switch (process.argv[i]) {
    case "build":
      build();
      break;
    case "watch":
      watch();
      break;
  }
}
