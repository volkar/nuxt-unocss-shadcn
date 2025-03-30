import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind4, transformerDirectives, transformerVariantGroup } from "unocss"
import presetAnimations from "unocss-preset-animations"
import { presetShadcn } from "unocss-preset-shadcn"

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		},
	},
	presets: [
		presetWind4(),
		presetAnimations(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// ...
			},
		}),
		presetShadcn(
			{
				color: "slate",
				// With default setting for SolidUI, you need to set the darkSelector option.
				//darkSelector: '[data-kb-theme="dark"]',
			},
			{
				// If you are using reka ui.
				//componentLibrary: "reka",
			}
		),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	content: {
		pipeline: {
			include: [
				// the default
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				"(components|src)/**/*.{js,ts}",
			],
		},
	},
})
