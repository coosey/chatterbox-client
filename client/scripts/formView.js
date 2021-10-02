// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    // var message = {
    //   username: App.username 'shawndrost',
    //   text: 'trololo',
    //   roomname: Rooms.getSelectedRoom() '4chan'
    // };
    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: Rooms.getSelectedRoom()
    };

    // Parse.create(message)
    Parse.create(message);
    // console.log(FormView.$form.find('#message').val());
    FormView.$form.find('#message').val('');
    // TODO: fetch all messages and rerender messages
    Parse.readAll((data) => {
      // and re-render the corresponding views.
      data.forEach(message => Messages.pushNewMessage(message));
    });
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};