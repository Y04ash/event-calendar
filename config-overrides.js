import path from "path"

export default function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src"),
  };
    // Ensure the tool looks for `index.html` in the root directory
    config.devServer = {
      ...config.devServer,
      contentBase: path.join(__dirname),
    };
  return config;
};

// module.exports = function override(config) {
//   config.resolve.alias = {
//     ...config.resolve.alias,
//     "@": path.resolve(__dirname, "src"),
//   };
//   return config;
// };
