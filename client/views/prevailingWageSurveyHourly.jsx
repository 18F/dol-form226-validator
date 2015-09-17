PrevailingWageSurveyHourly = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      prevailingWageSurveyHourly: Session.get("prevailingWageSurveyHourly")
    };
  },
  render: function() {
    return (
      <article>
        <header>
          <PrevailingWageSurveyHourlyInstructions/>
        </header>
        <Section8a/>
      </article>
    );
  }
});
