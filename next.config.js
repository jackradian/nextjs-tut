require("dotenv").config();

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true"
// });
// module.exports = withBundleAnalyzer({
//   env: {
//     MONGODB_URI: process.env.MONGODB_URI,
//     DB_NAME: process.env.DB_NAME
//   }
// });
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME
  }
});
