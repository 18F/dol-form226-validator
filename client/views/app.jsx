App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
    };
  },
  getInitialState: function() {
    return {
      page: "section8"
    }
  },
  render: function() {
    var page = this.state.page;
    var subsection = this.state.subsection;
    
    var renderPage = function() {
      switch (page) {
        case "section8":
          return <Section8/>;
        default:
          return <p>no valid page wired yet</p>;
      }
    };
    
    return (
      <div>
        { renderPage() }
      </div>
    );
  }
});
