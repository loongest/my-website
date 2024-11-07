import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/webapp/blog',
    component: ComponentCreator('/webapp/blog', 'b14'),
    exact: true
  },
  {
    path: '/webapp/blog/archive',
    component: ComponentCreator('/webapp/blog/archive', '44c'),
    exact: true
  },
  {
    path: '/webapp/blog/authors',
    component: ComponentCreator('/webapp/blog/authors', '0f2'),
    exact: true
  },
  {
    path: '/webapp/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/webapp/blog/authors/all-sebastien-lorber-articles', '3a6'),
    exact: true
  },
  {
    path: '/webapp/blog/authors/yangshun',
    component: ComponentCreator('/webapp/blog/authors/yangshun', '951'),
    exact: true
  },
  {
    path: '/webapp/blog/first-blog-post',
    component: ComponentCreator('/webapp/blog/first-blog-post', '40a'),
    exact: true
  },
  {
    path: '/webapp/blog/long-blog-post',
    component: ComponentCreator('/webapp/blog/long-blog-post', 'c9b'),
    exact: true
  },
  {
    path: '/webapp/blog/mdx-blog-post',
    component: ComponentCreator('/webapp/blog/mdx-blog-post', '7a9'),
    exact: true
  },
  {
    path: '/webapp/blog/tags',
    component: ComponentCreator('/webapp/blog/tags', '14f'),
    exact: true
  },
  {
    path: '/webapp/blog/tags/docusaurus',
    component: ComponentCreator('/webapp/blog/tags/docusaurus', '2e2'),
    exact: true
  },
  {
    path: '/webapp/blog/tags/facebook',
    component: ComponentCreator('/webapp/blog/tags/facebook', 'fde'),
    exact: true
  },
  {
    path: '/webapp/blog/tags/hello',
    component: ComponentCreator('/webapp/blog/tags/hello', 'c99'),
    exact: true
  },
  {
    path: '/webapp/blog/tags/hola',
    component: ComponentCreator('/webapp/blog/tags/hola', 'f68'),
    exact: true
  },
  {
    path: '/webapp/blog/welcome',
    component: ComponentCreator('/webapp/blog/welcome', '06a'),
    exact: true
  },
  {
    path: '/webapp/markdown-page',
    component: ComponentCreator('/webapp/markdown-page', 'f39'),
    exact: true
  },
  {
    path: '/webapp/docs',
    component: ComponentCreator('/webapp/docs', 'd19'),
    routes: [
      {
        path: '/webapp/docs',
        component: ComponentCreator('/webapp/docs', '00a'),
        routes: [
          {
            path: '/webapp/docs',
            component: ComponentCreator('/webapp/docs', 'f73'),
            routes: [
              {
                path: '/webapp/docs/category/tutorial---basics',
                component: ComponentCreator('/webapp/docs/category/tutorial---basics', '095'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/category/tutorial---extras',
                component: ComponentCreator('/webapp/docs/category/tutorial---extras', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/intro',
                component: ComponentCreator('/webapp/docs/intro', 'c9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/webapp/docs/tutorial-basics/congratulations', '449'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/webapp/docs/tutorial-basics/create-a-blog-post', '38b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/webapp/docs/tutorial-basics/create-a-document', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/webapp/docs/tutorial-basics/create-a-page', '1b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/webapp/docs/tutorial-basics/deploy-your-site', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/webapp/docs/tutorial-basics/markdown-features', '9c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/webapp/docs/tutorial-extras/manage-docs-versions', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/webapp/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/webapp/docs/tutorial-extras/translate-your-site', 'c33'),
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
    path: '/webapp/',
    component: ComponentCreator('/webapp/', 'ad9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
