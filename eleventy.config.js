const { DateTime } = require("luxon");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addFilter("formatDate", (date) => {
    return DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
  });
  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "taqjac.eu",
			subtitle: "Personal website.",
			base: "https://taqjac.netlify.app/",
			author: {
				name: "Tiago Jacinto",
				email: "taqjac@icloud.com", // Optional
			}
		}
	});
};
