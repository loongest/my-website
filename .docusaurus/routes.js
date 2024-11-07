import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-website/blog',
    component: ComponentCreator('/my-website/blog', 'a39'),
    exact: true
  },
  {
    path: '/my-website/blog/archive',
    component: ComponentCreator('/my-website/blog/archive', 'fd4'),
    exact: true
  },
  {
    path: '/my-website/blog/authors',
    component: ComponentCreator('/my-website/blog/authors', '199'),
    exact: true
  },
  {
    path: '/my-website/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/my-website/blog/authors/all-sebastien-lorber-articles', '250'),
    exact: true
  },
  {
    path: '/my-website/blog/authors/yangshun',
    component: ComponentCreator('/my-website/blog/authors/yangshun', 'c81'),
    exact: true
  },
  {
    path: '/my-website/blog/first-blog-post',
    component: ComponentCreator('/my-website/blog/first-blog-post', 'e4a'),
    exact: true
  },
  {
    path: '/my-website/blog/long-blog-post',
    component: ComponentCreator('/my-website/blog/long-blog-post', 'a85'),
    exact: true
  },
  {
    path: '/my-website/blog/mdx-blog-post',
    component: ComponentCreator('/my-website/blog/mdx-blog-post', 'd3a'),
    exact: true
  },
  {
    path: '/my-website/blog/tags',
    component: ComponentCreator('/my-website/blog/tags', 'c89'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/docusaurus',
    component: ComponentCreator('/my-website/blog/tags/docusaurus', '1fa'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/facebook',
    component: ComponentCreator('/my-website/blog/tags/facebook', '9fc'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/hello',
    component: ComponentCreator('/my-website/blog/tags/hello', 'e7a'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/hola',
    component: ComponentCreator('/my-website/blog/tags/hola', '49a'),
    exact: true
  },
  {
    path: '/my-website/blog/welcome',
    component: ComponentCreator('/my-website/blog/welcome', '351'),
    exact: true
  },
  {
    path: '/my-website/markdown-page',
    component: ComponentCreator('/my-website/markdown-page', '773'),
    exact: true
  },
  {
    path: '/my-website/docs',
    component: ComponentCreator('/my-website/docs', 'a7b'),
    routes: [
      {
        path: '/my-website/docs',
        component: ComponentCreator('/my-website/docs', 'c5e'),
        routes: [
          {
            path: '/my-website/docs',
            component: ComponentCreator('/my-website/docs', 'f94'),
            routes: [
              {
                path: '/my-website/docs/category/tutorial---basics',
                component: ComponentCreator('/my-website/docs/category/tutorial---basics', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/category/tutorial---extras',
                component: ComponentCreator('/my-website/docs/category/tutorial---extras', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/intro',
                component: ComponentCreator('/my-website/docs/intro', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/my-website/docs/tutorial-basics/congratulations', '6be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-blog-post', '60b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-document', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-page', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/my-website/docs/tutorial-basics/deploy-your-site', '989'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/my-website/docs/tutorial-basics/markdown-features', 'd96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/my-website/docs/tutorial-extras/manage-docs-versions', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/my-website/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/my-website/docs/tutorial-extras/translate-your-site', '873'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/my-website/',
    component: ComponentCreator('/my-website/', '292'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
