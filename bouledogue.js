function build() {
  let fs = require("fs");
  let sass = require("node-sass");
  console.log("Building bouledogue...");
  let css = sass.renderSync({
    file: "./scss/bouledogue.scss",
    sourceMap: false,
    outFile: "bouledogue.css",
    includePaths: ["node_modules/systematize/"],
    outputStyle: "compressed"
  });
  console.log("moving to ./css/ ...");
  fs.writeFileSync('./css/bouledogue.css', css.css);
  console.log("done building bouledogue, bark 🐶");
  return 0;
}

function watch() {
  /* TODO */
  console.log("Not implemented yet !")
  return;
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
