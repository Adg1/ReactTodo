const React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id,text} = this.props;
    return (
      <div>
        <div>{id} : {text}</div>
      </div>
    );
  }
});

module.exports = Todo;
