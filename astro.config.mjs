import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://openappcli.borninsea.com", 
	i18n: {
		defaultLocale: "en",
		locales: ["en", "zh-CN"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	trailingSlash: "always",
	integrations: [
		icon(),
		sitemap({
			filter: (page) => !page.includes("/admin"),
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en-US",
					"zh-CN": "zh-CN",
				},
			},
		}),
	],
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Roboto",
			cssVariable: "--font-primary",
			fallbacks: ["Arial", "sans-serif"],
			weights: [400, 700, 900],
			styles: ["normal"],
		},
	],
});
