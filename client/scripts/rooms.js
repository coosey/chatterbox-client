// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _rooms: [],
  _selectedRoom: '',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function (room) {
    if (!Rooms._rooms.includes(room)) {
      Rooms._rooms.push(room);
      return true;
    } else {
      return false;
    }
  },

  selectRoom: function (room) {
    if (!Rooms._rooms.includes(room)) {
      Rooms._rooms.push(room);
    }
    Rooms._selectedRoom = room;
  },

  //getAllRooms
  getAllRooms: function () {
    return Rooms._rooms;
  },

  getSelectedRoom: function () {
    return Rooms._selectedRoom;
  }
};