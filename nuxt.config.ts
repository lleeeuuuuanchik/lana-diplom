// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	modules: [
		'@pinia/nuxt',
		'@nuxtjs/tailwindcss',
		"@nuxtjs/color-mode",
		'@vueuse/nuxt',
		'shadcn-nuxt',
	],

	shadcn: {
		prefix: '',
		componentDir: './components/shadcn'
	},

	colorMode: { classSuffix: "", },

	// css base configuration
	css: ['@/assets/styles/index.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern',
					silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api'],
					additionalData: `@use "@/assets/styles/base/_variables.scss" as *;  @use "@/assets/styles/base/_mixins.scss" as *;`,
				},
			},
		},
		plugins: [
			tailwindcss(),
		],
	},
})
