import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'MZscript',
	tagline: 'Improved BDFD interpreter in Python',
	favicon: 'img/mini-logo.png',
  	// Set the production url of your site here
  	url: 'https://mzscript.vercel.app',
  	// Set the /<baseUrl>/ pathname under which your site is served
  	// For GitHub pages deployment, it is often '/<projectName>/'
  	baseUrl: '/',
  	// GitHub pages deployment config.
  	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'MZshnik',
  	projectName: 'MZscript',
	onBrokenLinks: 'throw',
  	onBrokenMarkdownLinks: 'warn',
 	// Even if you don't use internationalization, you can use this field to set
  	// useful metadata like html lang. For example, if your site is Chinese, you
  	// may want to replace "en" with "zh-Hans".
  	i18n: {
    	defaultLocale: 'en',
		locales: ['en', 'ru'],
		localeConfigs: {
			en: {
				label: 'English',
			},
			ru: {
				label: 'Русский'
			},
		},
  	},
  	presets: [
    	[
      	'classic',
      	/** @type {import('@docusaurus/preset-classic').Options} */
      	({
        	docs: {
          		sidebarPath: './sidebars.js',
				editUrl: 'https://github.com/flash4ki/mzscriptdocs/tree/main',
			},
			blog: {
				showReadingTime: true,
				editUrl: 'https://github.com/flash4ki/mzscriptdocs/tree/main',
			},
			theme: {
        		customCss: './src/css/custom.css',
        	},
      	}),
    	],
  	],
	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    	// Replace with your project's social card
      	// image: '',
      	navbar: {
        	title: 'MZscript',
        	logo: {
				alt: 'MZscript',
				src: 'img/logo.png',
        	},
        	items: [
				{
					type: 'docSidebar',
					sidebarId: 'docsID',
					position: 'left',
					label: 'Documentation',
				},
				{ to: '/', label: 'Updates', position: 'left' },
				{
					type: 'localeDropdown',
					position: 'right',
				},
				{
					href: 'https://github.com/MZshnik/MZscript',
					label: 'GitHub',
					position: 'right',
				},
        	],
      	},
      	footer: {
        	style: 'dark',
        	links: [
          	{
            	title: 'Links',
            	items: [
             	{
                	label: 'Discord',
					href: 'https://discord.gg/gfix-bot-community-mz-796504104565211187',
             	},
              	{
                	label: 'GitHub',
				  	href: 'https://github.com/MZshnik/MZscript',
              	},
              	{
                	label: 'PyPI',
					href: 'https://pypi.org/project/MZscript/',
             	},
            	],
          	},
        	],
		  	copyright: `Copyright © ${new Date().getFullYear()} MZshnik.`,
		},
      	prism: {
        	theme: prismThemes.github,
        	darkTheme: prismThemes.dracula,
		},
		colorMode: {
			defaultMode: "dark",
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
    }),
};

export default config;
