minispade.register('ember-formbuilder/formbuilder/views/error', "(function() {(function() {\n\n  Ember.FormBuilder.Error = Ember.FormBuilder.Info.extend({\n    init: function() {\n      this._super();\n      this.set('classes', this.get('classes') || Ember.FormBuilder.errorClass);\n      return this.set('tagName', this.get('tagName') || Ember.FormBuilder.errorTag);\n    }\n  });\n\n}).call(this);\n})();\n//@ sourceURL=ember-formbuilder/formbuilder/views/error");