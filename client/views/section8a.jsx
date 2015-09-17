Section8a = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      formState: Session.get("formState")
    }
  },
  render: function() {
    var formState = this.data.formState;
    var didPaySubminimum = formState.section8a;
    var setDidPaySubminimum = function() {
      formState.section8a = true;
      persist();
    };

    var unsetDidPaySubminimum = function() {
      formState.section8a = false;
      persist();
    };

    var persist = function() {
      Session.set("formState", formState);
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
        </section>
      </article>
    );
  }
});
