Package.describe({
  name: 'jss:blog',
  summary: 'Create simple blog for Meteor Application',
  version: '0.0.1',
  git: ' /* Fill me in! */ '
});

var both = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
    "meteor-platform",
    "iron:router",
    "mizzao:bootstrap-3",
    "accounts-password",
    "accounts-ui"
  ]);
  api.addFiles(['jss:blog.js']);

  api.addFiles([
    'client/views/articles/articles.html',
    'client/views/articles/articles.js',
    'client/views/login/login.html'
  ], 'client');

  api.addFiles([
    'server/publication.js'
  ], 'server');

  api.addFiles([
    'both/collections/articles.js',
    'both/router.js'
  ], both);
});