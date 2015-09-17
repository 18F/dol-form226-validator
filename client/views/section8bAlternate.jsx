Section8bAlternate = React.createClass({
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
        <label htmlFor="8bAlternateDescription">Description of work: <input
type="input" ref="8bAlternateDescription"/></label>
        <label htmlFor="8bAlternateSource">Alternative data source: <input
type="input" ref="8bAlternateSource"/></label>
        <label htmlFor="8bAlternatePrevailing">Prevailing wage provided by source: <input
type="input" ref="8bAlternatePrevailing"/></label>
        <label htmlFor="8bAlternateDate">Date data retrived: <input
type="input" ref="8bAlternateDate"/></label>
      </fieldset>
    );
  }
});
