/*****************************************************************************/
/* Login: Event Handlers and Helpers */
/*****************************************************************************/
Template.Login.events({
  'click button': function(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('click on button');
  }
});

Template.Login.helpers({

});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};
