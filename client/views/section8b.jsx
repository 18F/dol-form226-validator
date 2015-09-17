Section8b = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      form226: Session.get("form226")
    };
  },
  getInitialState: function() {
    var form226 = Session.get("form226");
    var method = form226 && form226.section8b && form226.section8b.method;
    return {
      method: method
    }
  },
  render: function() {
    var that = this;
    var method = this.state.method;

    var setMethod = function(event) {
      that.setState({method: event.target.value});
    };

    var emitScaWageDetermination = function() {
      if (method === "sca") {
        return <Section8bSca/>
      }
    };
    
    var emitAlternateWageDetermination = function() {
      if (method === "alternate") {
        return <Section8bAlternate/>;
      }
    };

    var emitPwsWageDetermination = function() {
      if (method === "pws") {
        return <Section8bPws/>;
      }
    };
    
    return (
      <section>
        <header>
          <p>section 8b instructions</p>
        </header>
        <label htmlFor="nameOfContract">Name of contract: <input type="text" ref="nameOfContract"/></label>
        <label htmlFor="descriptionOfWork">Description of work: <textarea ref="nameOfContract"/></label>
        <input type="radio" name="method" checked={method === "PWS"} value="pws"
               onChange={setMethod}/> PWS
        <input type="radio" name="method" checked={method === "alternate"} value="alternate"
               onChange={setMethod}/> Alternate wage data
        <input type="radio" name="method" checked={method ==="sca"} value="sca"
               onChange={setMethod}/> SCA
        { emitScaWageDetermination() }
        { emitAlternateWageDetermination() }
        { emitPwsWageDetermination() }
      </section>
    );
  }
});
