PersistFormMixin = {
  persist: function(formState) {
    Session.set("formState", formState);
  }
}
