Section8b = React.createClass({
  mixins: [ReactMeteorData, PersistFormMixin, ValidationMixin({
    "howMany": [ { method: validator.isInt, message: "must be an integer" } ]
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
        <label htmlFor="howMany">How many:
          <input type="text" name="howMany" ref="howMany" onKeyUp={this.validate}
                 data-valid={ this.isValid("howMany")}/>
        </label>
        {this.emitValidationError("howMany")}

        <label htmlFor="nameOfContract">Name of contract: <input type="text" ref="nameOfContract"/></label>
        <label htmlFor="descriptionOfWork">Description of work: <textarea ref="nameOfContract"/></label>
        <input type="radio" name="method" checked={method === "pws"} value="pws"
               onChange={setMethod}/> PWS
        <input type="radio" name="method" checked={method === "alternate"} value="alternate"
               onChange={setMethod}/> Alternate wage data
        <input type="radio" name="method" checked={method ==="sca"} value="sca"
               onChange={setMethod}/> SCA
      </section>
    );
  }
});
