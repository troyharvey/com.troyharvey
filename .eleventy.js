module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"node_modules/tufte-css/tufte.min.css": "tufte/tufte.min.css"});
  eleventyConfig.addPassthroughCopy({"node_modules/tufte-css/et-book": "tufte/et-book"});
};
