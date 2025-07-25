import defaultImage from "./assets/img/default.png"

const CONFIG = {
	name: "AstroWind",

	origin: "https://annieehler-com-astro-three.vercel.app",
	basePathname: "/",
	trailingSlash: false,

	title: "Annie Ehler - Blog, Portfolio & Online Resume",
	description:
		"Annie Ehler is a web developer and designer based in Los Angeles. This is her personal blog, portfolio, and online resume.",
	defaultImage: defaultImage,

	defaultTheme: "system", // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

	language: "en",
	textDirection: "ltr",

	dateFormatter: new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "America/Los_Angeles"
	}),

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",

	blog: {
		disabled: false,
		postsPerPage: 4,

		post: {
			permalink: "/posts/%slug%", // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
			noindex: false,
			disabled: false
		},

		list: {
			pathname: "blog", // Blog main path, you can change this to "articles" (/articles)
			noindex: false,
			disabled: false
		},

		category: {
			pathname: "category", // Category main path /category/some-category
			noindex: true,
			disabled: false
		},

		tag: {
			pathname: "tag", // Tag main path /tag/some-tag
			noindex: true,
			disabled: false
		}
	}
}

export const SITE = { ...CONFIG, blog: undefined }
export const BLOG = CONFIG.blog
export const DATE_FORMATTER = CONFIG.dateFormatter
