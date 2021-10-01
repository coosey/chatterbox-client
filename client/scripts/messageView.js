// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.

  // <%-value%> - will escape
  // <%=value%> - wont escape

  // message is an object passed into the template that fills the data
  // var renderedMessage = render(message);

  render: _.template(`
      <div class="chat">
        <div class="username"><%-username%></div>
        <div>
          <p>
            <%-text%>
          </p>
        </div>
      </div>
    `)

};