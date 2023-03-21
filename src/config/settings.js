
const postcssPresetEnv = require('postcss-preset-env');

exports.imageWidths = [300, 600, 900, 1200, 1800]
exports.imageFormats = ["avif", "jpeg"]
exports.imageLoading = 'lazy'
exports.imageDecoding = 'async'

exports.viteOptions = {
	css: {
		devSourcemap: true,
		postcss: {
			plugins: [
				postcssPresetEnv({
					stage: 2,
					features: {
						'nesting-rules': true,
						'custom-media-queries': true,
						'lab-function': { preserve: true },
					},
				}),
			]
		}
	}
}