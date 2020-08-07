const path = require("path"); // -> 노드 모듈중 하나

module.exports = {
  name: "wordreplay-setting",
  mode: "development", // -> 실제 서비스에서는 production으로 설정
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"],
  }, // -> 파일 확장자를 알아서 찾아주는 요소
  // resolveLoader: {
  //   root: path.join(__dirname, "node_modules"),
  // },

  entry: {
    app: ["./client"], // -> client.jsx가 WordReplay를 부르기 때문에 입력에 따로 안적어줘도 된다.
  }, // -> 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"), // ->현재폴더 안에 경로를 합쳐주는 개념
    filename: "app.js",
  }, // -> 출력
};
