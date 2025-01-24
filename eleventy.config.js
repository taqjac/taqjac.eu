const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addFilter("formatDate", (date) => {
    return DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
  });
  
};
