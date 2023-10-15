import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			// Assets
			"@images/*": "src/assets/images/*",
			"@icons/*": "src/assets/images/icons/*",
			// Logic
			"@config": "src/logic/config.ts",
			"@stores": "src/logic/stores/index.ts",
			"@actions": "src/logic/actions/index.ts",
			"@schemas/*": "src/logic/schemas/*",
			"@services/*": "src/logic/services/*",
			"@typing/*": "src/logic/typing/*",
			"@utils/*": "src/logic/utils/*",
			// UI Home
			"@home/atoms": "src/ui/home/atoms/index.ts",
			"@home/molecules": "src/ui/home/molecules/index.ts",
			"@home/organisms": "src/ui/home/organisms/index.ts",
			"@home/styles": "src/ui/home/styles/index.ts",
			// UI Hero
			"@Hero/atoms": "src/ui/Hero/atoms/index.ts",
			"@Hero/molecules": "src/ui/Hero/molecules/index.ts",
			"@Hero/organisms": "src/ui/Hero/organisms/index.ts",
			"@Hero/styles": "src/ui/Hero/styles/index.ts",
			// UI About
			"@about/atoms": "src/ui/about/atoms/index.ts",
			"@about/molecules": "src/ui/about/molecules/index.ts",
			"@about/organisms": "src/ui/about/organisms/index.ts",
			"@about/styles": "src/ui/about/styles/index.ts",
     		 // UI OferServices
			"@oferservices/atoms": "src/ui/oferservices/atoms/index.ts",
			"@oferservices/molecules": "src/ui/oferservices/molecules/index.ts",
			"@oferservices/organisms": "src/ui/oferservices/organisms/index.ts",
			"@oferservices/styles": "src/ui/oferservices/styles/index.ts",
      // UI Clients
			"@clients/atoms": "src/ui/clients/atoms/index.ts",
			"@clients/molecules": "src/ui/clients/molecules/index.ts",
			"@clients/organisms": "src/ui/clients/organisms/index.ts",
			"@clients/styles": "src/ui/clients/styles/index.ts",
      // UI Contact
			"@contact/atoms": "src/ui/contact/atoms/index.ts",
			"@contact/molecules": "src/ui/contact/molecules/index.ts",
			"@contact/organisms": "src/ui/contact/organisms/index.ts",
			"@contact/styles": "src/ui/contact/styles/index.ts",
      // NEXT_ALIAS





			// UI Sharing
			"@sharing/atoms": "src/ui/sharing/atoms/index.ts",
			"@sharing/molecules": "src/ui/sharing/molecules/index.ts",
			"@sharing/organisms": "src/ui/sharing/organisms/index.ts",
			"@styles": "src/ui/sharing/styles/globals.ts",
			"@mixins": "src/ui/sharing/styles/mixins.ts",
			"@stylesinputs": "src/ui/sharing/styles/inputs/index.ts",

		}
	}
};

export default config;
