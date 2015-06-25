Package.describe({
  name: 'ostrio:instagram-node',
  summary: 'Simple Instagram driver for Meteor (NPM)',
  version: '0.5.7',
  git: 'https://github.com/VeliovGroup/instagram-node.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.addFiles('instagram-node.coffee', 'server');
  api.use('coffeescript', 'server');
  api.export('instagramNode', 'server');
});

Npm.depends({
  'instagram-node': '0.5.7'
});