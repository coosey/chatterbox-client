// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // handleClick()
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // clear #chats
    this.$chats.empty();
    // Get all messages from current room
    // Render all messages for current room
    var messages = Messages.getAllMessagesFromRoom(Rooms.getSelectedRoom());
    messages.forEach(message => this.renderMessage(message));
  },

  renderMessage: function(message) {
    // TODO: add handleClick to this
    var html = MessageView.render(message);
    $('#chats').append(html);
    $('#chats').find(`#${message.message_id}`).find('div').click((event) => {
      MessagesView.handleClick(event);
    });
    // if is friend
    if (Friends.isFriend(message.username)) {
    // make message text bold
      // $myElement.css("font-weight","Bold");
      $('#chats').find(`#${message.message_id}`).css('font-weight', 'Bold');
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    // this gets the username
    // console.log(event.currentTarget.innerText);
    Friends.addFriends(event.currentTarget.innerText);
  }

};