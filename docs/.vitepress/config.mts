// import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid({
  // your existing vitepress config...
  title: 'silverorange Project Principles',
  description: 'Principles to follow for joyful software development!',
  base: '/project-principles/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'Principles',
        items: [
          {
            text: 'Freestanding Principle',
            link: '/project-principle-freestanding',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/silverorange/project-principles' },
    ],
  },
  // optionally, you can pass MermaidConfig
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: 'mermaid my-class', // set additional css classes for parent container
  },
});

// https://vitepress.dev/reference/site-config
// export default
