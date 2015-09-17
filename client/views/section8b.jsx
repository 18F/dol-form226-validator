Section8b = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      formState: Session.get("formState")
    }
  },
  render: function() {
    var that = this;
    var formState = this.data.formState
    var method = (formState.section8b && formState.section8b.method) ? formState.section8b.method : "";
    
    var persist = function() {
      Session.set("formState", formState);
    };
    
    var setMethod = function(event) {
      var method = event.target.value;
      if (formState.section8b) {
        formState.section8b.method = method;
      } else {
        formState.section8b = {method: method};
      }
      persist();
    };
    
    /*
    var validate = function(event) {
      var isValid = true;
      var targetName = event.target.name;
      var value = event.target.value;
      
      switch (targetName) {
        case "howMany":
          isValid = validator.isInt(value);
          break;
      }

      setValid(name, isValid);
    }

    var getValidationStateName = function(name) {
      return "validation-name";
    };
    
    var setValid = function (name, isValid) {
      var validationStateName = getValidationStateName(name);
      that.setState({validationStateName: isValid});
    };

    var isValid = function(name) {
      var validationStateName = getValidationStateName(name);
      var validationExists = !_.isUndefined(that.state.validationStateName);
      return validationExists && that.state.validationStateName;
    }

    var emitValidationError = function(name) {
      var isInvalid = !isValid(name);
      if (isInvalid) {
        return <span data-error>{getValidationErrorFor(name)}</span>;
      }
    }

    var getValidationErrorFor = function(name) {
      switch (name) {
        case "howMany":
          return "must be numeric";
      };
    }
    */
    
    return (
      <section>
        <header>
          <p>section 8b instructions</p>
        </header>
        <div className="form-group">
          <label htmlFor="howMany">How many:</label>
          <input className="form-control" type="text" name="howMany" ref="howMany"/>
        </div>


        <div className="form-group">
          <label htmlFor="nameOfContract">Name of contract: </label>
          <input className="form-control" type="text" ref="nameOfContract"/>
        </div>

        <div className="form-group">
          <label htmlFor="descriptionOfWork">Description of work: </label>
          <textarea className="form-control" rows="3" ref="nameOfContract"/>
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
