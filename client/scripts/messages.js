// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // message Object has
  // {campus, created_ar, github_handle, message_id, roomname, text, updated_at, username}

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // function pushNewMessageFromServer(message)
  //   _data[message.message_id] = message
  pushNewMessage: function (message) {
    this._data[message.message_id] = message;
  },

  // function getAllMessages()
  //   return _data
  getAllMessages: function () {
    return this._data;
  },

  // function getAllMessagesFromRoom(roomname)
  // var array = []
  // for (key in _data)
  //   if(_data[key].roomname === roomname)
  //     array.push(_data[key])
  // return array
  getAllMessagesFromRoom: function (roomName) {
    var array = [];
    for (key in this._data) {
      if (this._data[key].roomname === roomName) {
        array.push(this._data[key]);
      }
    }

    // rerender Messages ???

    return array;
  }
};