export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2073eee0aa19d08b96f95c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vpzb3tof',
                  apiId: '538a29d8-d184-464d-84e9-8917736e192c'
                },
                {
                  buildHookId: '5e2073ee179df88a3e3c2f2a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iev8wtgi',
                  apiId: '53d37bc1-02ea-4c66-84ea-caaed81fdd2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/milosgacanovic/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iev8wtgi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
