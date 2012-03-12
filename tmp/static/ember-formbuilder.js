
(function(exports) {
(function() {

  Ember.FormBuilder = Ember.Namespace.create({
    wrapperTag: 'div',
    wrapperClass: 'control-group',
    inputWrapperTag: 'div',
    inputWrapperClass: 'controls',
    labelClass: 'control-label',
    helpTag: 'p',
    helpClass: 'help-block',
    errorTag: 'span',
    errorClass: 'help-inline'
  });

  require("ember-formbuilder/formbuilder/views/form");

  require("ember-formbuilder/formbuilder/views/input");

  require("ember-formbuilder/formbuilder/views/_info");

  require("ember-formbuilder/formbuilder/views/help");

  require("ember-formbuilder/formbuilder/views/error");

}).call(this);

})({});


(function(exports) {
(function() {

  Ember.FormBuilder.Info = Ember.View.extend({
    classNameBindings: ['classes'],
    template: Ember.Handlebars.compile('{{text}}')
  });

}).call(this);

})({});


(function(exports) {
(function() {

  Ember.FormBuilder.Error = Ember.FormBuilder.Info.extend({
    init: function() {
      this._super();
      this.set('classes', this.get('classes') || Ember.FormBuilder.errorClass);
      return this.set('tagName', this.get('tagName') || Ember.FormBuilder.errorTag);
    }
  });

}).call(this);

})({});


(function(exports) {
(function() {

  Ember.FormBuilder.Form = Ember.View.extend({
    tagName: 'form',
    classNameBindings: ['classes']
  });

}).call(this);

})({});


(function(exports) {
(function() {

  Ember.FormBuilder.Help = Ember.FormBuilder.Info.extend({
    init: function() {
      this._super();
      this.set('classes', this.get('classes') || Ember.FormBuilder.helpClass);
      return this.set('tagName', this.get('tagName') || Ember.FormBuilder.helpTag);
    }
  });

}).call(this);

})({});


(function(exports) {
(function() {

  Ember.FormBuilder.Info = Ember.View.extend({
    classNameBindings: ['classes'],
    template: Ember.Handlebars.compile('{{text}}')
  });

}).call(this);

})({});


(function(exports) {
(function() {

  Ember.FormBuilder.Input = Ember.View.extend({
    tagName: Ember.FormBuilder.wrapperTag,
    classNameBindings: ['wrapperClass', 'infoClass'],
    template: Ember.Handlebars.compile('\
    {{#if showLabel}}\
      <label class="string required control-label" for="function_name">\
        <abbr title="required">*</abbr> {{name}}\
      </label>\
    {{/if}}\
    {{#view Ember.View tagName=inputWrapperTag class=inputWrapperClass contentBinding="this"}}\
      <span></span>\
      {{#if content.error}}\
        {{view Ember.FormBuilder.Error text=content.error}}\
      {{/if}}\
      {{#if content.hint}}\
        {{view Ember.FormBuilder.Help text=content.hint}}\
      {{/if}}\
    {{/view}}\
  '),
    inputViewClass: Ember.TextField,
    inputClass: '',
    name: '',
    init: function() {
      this._super();
      this.set('inputWrapperTag', this.get('inputWrapperTag') || Ember.FormBuilder.inputWrapperTag);
      this.set('inputWrapperClass', this.get('inputWrapperClass') || Ember.FormBuilder.inputWrapperClass);
      this.set('wrapperClass', this.get('wrapperClass') || Ember.FormBuilder.wrapperClass);
      this.inputViewClassChaged();
      if (this.get('showLabel') === void 0) this.set('showLabel', true);
      return this.set('infoClass', this.get('infoClass') || '');
    },
    errorChanged: Ember.observer(function() {
      if (this.get('error') !== void 0) return this.set('infoClass', 'error');
    }, 'error'),
    inputViewClassChaged: Ember.observer(function() {
      var that;
      that = this;
      return this.set('inputView', this.inputViewClass.create({
        valueBinding: 'that.value'
      }));
    }, 'inputViewClass'),
    didInsertElement: function() {
      if (this.get('inputWrapperTag')) {
        return this.get('inputView').appendTo(this.$().find(this.get('inputWrapperTag')).find('span'));
      } else {
        return this.get('inputView').appendTo(this.$('span'));
      }
    }
  });

}).call(this);

})({});


(function(exports) {
(function() {

  require("ember-formbuilder/formbuilder");

}).call(this);

})({});
