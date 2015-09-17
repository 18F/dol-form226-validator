Section8bPws = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      form226: Session.get("form226")
    };
  },
  render: function() {
    return (
      <fieldset>
        <legend>instructions</legend>
        <button name="addSource">Add source</button>
      </fieldset>
    );
  }
});
