import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";

export default [
  {
    input: "reactAppSrc/index.js",
    output: {
      file: `public/built/rollup.cjs.min.js`,
      format: "cjs",
      esModule: false
    },
    external: [
      "react",
      "react-dom",
      "react-redux",
      "redux",
      "react-router-dom"
    ],
    plugins: [
      babel({ exclude: /node_modules/ }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development")
      })
    ]
  }
];
