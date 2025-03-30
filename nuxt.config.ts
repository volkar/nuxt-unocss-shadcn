// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@unocss/nuxt", "shadcn-nuxt"],
	shadcn: {
		prefix: "",
		componentDir: "./components/ui",
	},
	css: ["@unocss/reset/tailwind.css"],
	app: {
		rootId: "app",
	},
})
