Section8bSca = React.createClass({
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
        <label htmlFor="scaUpload">Attach the applicable SCA wage determination: <input
type="file" ref="scaWageDetermination"/></label>
      </fieldset>
    );
  }
});
