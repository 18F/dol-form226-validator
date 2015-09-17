Section8b = React.createClass({
  mixins: [ReactMeteorData, PersistFormMixin, ValidationMixin({
    "howMany": [ { method: validator.isInt, message: "must be an integer" } ],
    "nameOfContract": [ { method: validator.isLength, args: [1], message: "required" } ],
    "descriptionOfWork": [ { method: validator.isLength, args: [1], message: "required" } ]
  })],
  getMeteorData: function() {
    return {
      formState: Session.get("formState")
    }
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    var that = this;
    var formState = this.data.formState
    var method = (formState.section8b && formState.section8b.method) ? formState.section8b.method : "";
    
    var setMethod = function(event) {
      var method = event.target.value;
      if (formState.section8b) {
        formState.section8b.method = method;
      } else {
        formState.section8b = {method: method};
      }
      that.persist(formState);
    };

    return (
      <section>
        <header>
          <p>section 8b instructions</p>
        </header>

        <div className="form-group">
          <label htmlFor="howMany">How many:</label>
          <input className="form-control" type="text" name="howMany" ref="howMany"
                 onKeyUp={this.validate} data-valid={ this.isValid("howMany")}/>
          {this.emitValidationError("howMany")}
        </div>

        <div className="form-group">
          <label htmlFor="nameOfContract">Name of contract: </label>
          <input className="form-control" type="text" name="nameOfContract"
                 ref="nameOfContract" onBlur={this.validate}
                 data-valid={ this.isValid("nameOfContract")}/>
          {this.emitValidationError("nameOfContract")}
        </div>

        <div className="form-group">
          <label htmlFor="descriptionOfWork">Description of work: </label>
          <textarea className="form-control" rows="3" ref="nameOfContract" name="descriptionOfWork"
          onBlur={this.validate}
                    data-valid={ this.isValid("descriptionOfWork")}/>
          {this.emitValidationError("descriptionOfWork")}
        </div>
        
        <label className="radio-inline">
          <input type="radio" name="method" checked={method === "pws"} value="pws"
               onChange={setMethod}/> PWS
        </label>

        <label className="radio-inline">
          <input type="radio" name="method" checked={method === "alternate"} value="alternate"
                 onChange={setMethod}/> Alternate wage data
        </label>
        
        <label className="radio-inline">
          <input type="radio" name="method" checked={method ==="sca"} value="sca"
                 onChange={setMethod}/> SCA
        </label>
      </section>
    );
  }
});
