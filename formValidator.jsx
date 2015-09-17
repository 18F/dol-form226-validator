if (Meteor.isClient) {

  Meteor.startup(function() {
    var anchorElement = document.getElementById("app-body");
    Session.set("formState", {});
    React.render(<App form=""/>, anchorElement);
  });
  
}

if (Meteor.isServer) {
  
  Meteor.startup(function () {
    // code to run on server at startup
  });

}
