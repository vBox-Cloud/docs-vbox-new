// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.vbox-cloud.com',
	integrations: [
		starlight({
			title: 'vBox Documentation',
			description: 'User documentation for vBox Azure Cloud Management platform.',
			logo: {
				src: './src/assets/vbox-logo.png',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vBox-Cloud/docs-vbox-new' },
				{ icon: 'external', label: 'vBox Website', href: 'https://www.vbox-cloud.com/' },
			],
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/vBox-Cloud/docs-vbox-new/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome', slug: 'index' },
						{ label: 'Prerequisites', slug: 'getting-started/prerequisites' },
						{ label: 'Onboarding', slug: 'getting-started/onboarding' },
						{ label: 'Navigation Guide', slug: 'getting-started/navigation' },
					],
				},
				{
					label: 'Cost Management',
					autogenerate: { directory: 'cost-management' },
				},
				{
					label: 'Security',
					autogenerate: { directory: 'security' },
				},
				{
					label: 'Operations',
					autogenerate: { directory: 'operations' },
				},
				{
					label: 'Tasks',
					autogenerate: { directory: 'tasks' },
				},
				{
					label: 'Analytics',
					autogenerate: { directory: 'analytics' },
				},
				{
					label: 'Integrations',
					autogenerate: { directory: 'integrations' },
				},
				{
					label: 'Administration',
					autogenerate: { directory: 'administration' },
				},
			],
		}),
	],
});
