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
    
    var emitHowMany = function() {
      if (didPaySubminimum) {
        return <label htmlFor="howMany">How many: <input type="text" ref="howMany"/></label>;
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
