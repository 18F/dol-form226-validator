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
        <label htmlFor="howMany">How many:
          <input type="text" name="howMany" ref="howMany"/>
        </label>

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
