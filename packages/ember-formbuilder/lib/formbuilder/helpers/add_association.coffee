Ember.Handlebars.registerHelper "addAssociation", (property, options) ->
  ember_assert "The addAssociation helper only takes a single argument", arguments.length <= 2

  options.hash.contentBinding = "content.#{property}"
  options.hash.preserveContext = true

  Ember.Handlebars.helpers.view.call this, 'Ember.FormBuilder.AddAssociation', options
