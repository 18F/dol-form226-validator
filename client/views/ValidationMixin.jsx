ValidationMixin = function(config) {
  var validate = function(event) {
    var isValid = true;
    var messages = [];
    var name = event.target.name;
    var value = event.target.value;

    var validations = config[name];

    if (validations) {
      _.each(validations, function(validation) {
        var validationMethod = validation.method;
        var validationArgs = validation.args;

        if (!validationArgs) {
          var isError = !validationMethod(value);
          if (isError) {
            messages.push(validation.message);
          }
        } else {
          var args = _.clone(validationArgs);
          args.unshift(value);
          var isError = !validationMethod.apply(this, args);
          if (isError) {
            messages.push(validation.message);
          }
        }
      });
    }

    setValid.call(this, name, isValid, messages);
  };
  
  var getValidationStateName = function(name) {
    return "validation-" + name;
  };
  
  var setValid = function (name, isValid, messages) {
    var validationStateName = getValidationStateName(name);
    var validationMessages = {};
    validationMessages[validationStateName] = messages;
    this.setState(validationMessages);
  };
  
  var isValid = function(name) {
    var validationStateName = getValidationStateName(name);
    var messages = this.state[validationStateName];
    return _.isEmpty(messages);
  };
  
  var emitValidationError = function(name) {
    var isInvalid = !isValid.call(this, name);
    if (isInvalid) {
      return <span data-error>{getValidationErrorFor.call(this, name)}</span>;
    }
  };
  
  var getValidationErrorFor = function(name) {
    var validationStateName = getValidationStateName(name);
    var messages = this.state[validationStateName];

    if (!_.isEmpty(messages)) {
      if (messages.length === 1) {
        return messages[0];
      } else {
        var message = messages[0];
        return _.rest(messages, function(nextMessage) {
          message += ", " + nextMessage;
        });
      }
    }
  };

  return {
    validate: validate,
    emitValidationError: emitValidationError,
    isValid: isValid
  }
};
