Section8 = React.createClass({
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
    return (
      <section>
        <header>
          <PrevailingWageSurveyHourlyInstructions/>
        </header>
        <Section8a/>
      </section>
    );
  }
});
