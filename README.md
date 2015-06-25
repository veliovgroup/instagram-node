Instargram-Node
==
`instagram-node` npm package in latest version.

This package simply exports the `instagramNode` variable to Meteor's server scope.

For more info please see original [instagram-node](https://github.com/totemstech/instagram-node) npm package

Install
==
```
meteor add ostrio:instagram-node
```

Usage
==

```coffeescript
if Meteor.isServer
  ig = instagramNode.instagram()

  ig.use
    client_id: 'YOUR_CLIENT_ID'
    client_secret: 'YOUR_CLIENT_SECRET'

  ig.use access_token: 'YOUR_ACCESS_TOKEN'
```