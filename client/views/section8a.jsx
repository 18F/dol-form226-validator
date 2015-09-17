Section8a = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      form226: Session.get("form226")
    };
  },
  getInitialState: function() {
    var form226 = Session.get("form226");
    var didPaySubminimum = form226 && form226.section8a && form226.section8a.didPaySubminimum;
    return {
      didPaySubminimum: didPaySubminimum
    }
  },
  render: function() {
    var didPaySubminimum = this.state.didPaySubminimum;
    var that = this;

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
    
    var emitHowMany = function() {
      if (didPaySubminimum) {
        return (
          <label htmlFor="howMany">How many:
            <input type="text" name="howMany" ref="howMany" onKeyUp={validate} data-valid={ isValid("howMany") }/>
            { emitValidationError("howMany") }
          </label>
        );
      }
    };

    var setDidPaySubminimum = function() {
      that.setState({didPaySubminimum: true});
    };

    var unsetDidPaySubminimum = function() {
      that.setState({didPaySubminimum: false});
    };

    var emitSection8b = function() {
      if (didPaySubminimum) {
        return <Section8b/>;
      }
    };
    
    return (
      <article>
        <section>
          <header>
            <p>section 8a instructions</p>
          </header>
          <input type="radio" name="didPaySubminimum" checked={didPaySubminimum} value="Yes"
                 onChange={setDidPaySubminimum}/> Yes
          <input type="radio" name="didPaySubminimum" checked={!didPaySubminimum} value="No"
                 onChange={unsetDidPaySubminimum}/> No
          { emitHowMany() }
        </section>
        { emitSection8b() }
      </article>
    );
  }
});
