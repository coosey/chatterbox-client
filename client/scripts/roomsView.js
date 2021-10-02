// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // when this view loads.
    // on button click, RoomsView.handleClick()
    RoomsView.$button.click(RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.render();
  },

  render: function () {
    var rooms = Rooms.getAllRooms();
    // get rid of all rooms in the select dropdown
    RoomsView.$select.empty();
    // loop thru our list of rooms
    rooms.forEach(room => (room !== undefined) ? RoomsView.renderRoom(room) : null);
    // check if current room is not undefined, render our rooms

    // change $select's text to selectedRoomname
    RoomsView.$select.val(Rooms.getSelectedRoom()).change();
  },

  renderRoom: function (roomname) {
    RoomsView.$select.append(`<option value=${roomname}>${roomname}</option>`);
  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.

    var room = RoomsView.$select.find(':selected').text();
    Rooms.selectRoom(room);
    // RoomsView.render();
  },

  handleClick: function (event) {
    // after clicking 'add room', let user enter new room name

    // use a prompt to allow users to input room name
    var newRoomName = prompt('Enter new room name:');
    // model Updating
    // call Rooms.addRoom
    Rooms.addRoom(newRoomName);
    // call Rooms.selectRoom
    Rooms.selectRoom(newRoomName);

    RoomsView.render();
  }

};
