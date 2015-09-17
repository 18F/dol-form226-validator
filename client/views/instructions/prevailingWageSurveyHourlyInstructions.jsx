PrevailingWageSurveyHourlyInstructions = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      prevailingWageSurveyHourly: Session.get("prevailingWageSurveyHourly")
    };
  },
  render: function() {
    return (
      <p>Insert instructions for prevailing wage survey paid hourly wage rates instructions here</p>
    );
  }
});
