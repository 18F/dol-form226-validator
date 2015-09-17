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
        
        <div className="form-group">
          <label htmlFor="8bAlternateDescription">Description of work: </label>
          <input className="form-control" type="input" ref="8bAlternateDescription"/>
        </div>
        
        <div className="form-group">
          <label htmlFor="8bAlternateSource">Alternative data source: </label>
          <input className="form-control" type="input" ref="8bAlternateSource"/>
        </div>


        <div className="form-group">
          <label htmlFor="8bAlternatePrevailing">Prevailing wage provided by source: </label>
          <input className="form-control" type="input" ref="8bAlternatePrevailing"/>
        </div>
      
        <div className="form-group">
          <label htmlFor="8bAlternateDate">Date data retrived: </label>
          <input className="form-control" type="input" ref="8bAlternateDate"/>
        </div>

      </fieldset>
    );
  }
});
