const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    //counter: "./src/views/components/counter/index.tsx",
    counter: "./src/views/components/counter/counter.tsx",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
  //devtool: "cheap-module-eval-source-map",
  //devtool: "inline-source-map",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
