const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,       // <- handles .js and .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react" // <- this enables JSX support
            ],
          },
        },
      },
      {
        test: /\.css$/,            // (optional) for CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],   // <- lets you import without specifying extension
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
};
