Package.describe({
  name: 'ostrio:instagram-node',
  summary: 'Simple Instagram driver for Meteor (NPM)',
  version: '0.5.8',
  git: 'https://github.com/VeliovGroup/instagram-node.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.addFiles('instagram-node.js', 'server');
  api.export('instagramNode', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['ostrio:instagram-node', 'underscore'], 'server');
  api.addFiles('tests.js', 'server');
});

Npm.depends({
  'instagram-node': '0.5.8'
});