// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    App.refetchData();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // and re-render the corresponding views.
      data.forEach(message => Messages.pushNewMessage(message));
    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  refetchData: function() {
    setTimeout(App.refetchData, 10000);
    // console.log('hello');
    App.fetch(App.stopSpinner);
  }
};
