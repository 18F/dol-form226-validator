App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      formState: Session.get("formState")
    }
  },
  getInitialState: function() {
    return {
      activeSection: "section8"
    }
  },
  render: function() {
    var activeSection = this.state.activeSection;
    var formState = this.data.formState;

    var renderSection8Instructions = function() {
      return <PrevailingWageSurveyHourlyInstructions/>;
    };

    var renderSection8 = function() {
      return <Section8/>;
    };
    
    var renderSection8 = function() {
      return <Section8/>;
    };
    
    var renderSection8a = function() {
      return <Section8a/>;
    };
    
    var renderSection8b = function() {
      return <Section8b/>;
    };
    
    var renderSection8bAlternate = function() {
      return <Section8bAlternate/>;
    };
    
    var renderSection8bPws = function() {
      return <Section8bPws/>;
    };
    
    var renderSection8bSca = function() {
      return <Section8bSca/>;
    };
    
    return (
      <div>
        { renderSection8Instructions() }
        { renderSection8() }
        { renderSection8a() }
        { renderSection8b() }
        { renderSection8bAlternate() }
        { renderSection8bPws() }
        { renderSection8bSca() }
      </div>
    );
  }
});
