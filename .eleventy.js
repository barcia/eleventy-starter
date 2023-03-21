const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

const imageRenderer = require('./src/config/markdown/images')
const imageShortcode = require('./src/config/shortcodes/image');
const isPublished = require('./src/config/utils/isPublished');

const settings = require('./src/config/settings')

module.exports = function (config) {

	config.addPlugin(EleventyVitePlugin, {
		viteOptions: settings.viteOptions
	});

	config.amendLibrary("md", imageRenderer);

	config.addAsyncShortcode("image", imageShortcode);

	config.addCollection('articles', collection => collection.getFilteredByGlob(`./src/content/articles/**/*.md`).filter(isPublished))

	config.addPassthroughCopy('src/css')
	config.addPassthroughCopy('src/js')

	return {
		dir: {
			input: "src/",
			layouts: "layouts"
		}
	}

};
