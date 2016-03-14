Meteor.startup(function(){
  if(Meteor.isServer){
    Tinytest.add('Has instagramNode Object', function(test){
      test.isTrue(_.isObject(instagramNode));
    });
  }
});