export default {
  widgets: [
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
                  buildHookId: '62ab604afde572009bfda258',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-u4tbcj4u',
                  apiId: '835ca919-8552-4c80-8ce9-25ded06a71cd'
                },
                {
                  buildHookId: '62ab604a19bcdd009c0a6d1e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r99wdfzr',
                  apiId: 'ebaac383-9b8b-4310-92a8-bfe2cb157e59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codyhall10/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r99wdfzr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
