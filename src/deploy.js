/* eslint no-console:0 */
const ghpages = require("gh-pages");

ghpages.publish("./out", {
  silent: false,
  logger: console.log.bind(console)
}, console.error.bind(console));
