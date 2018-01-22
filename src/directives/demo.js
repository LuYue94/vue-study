import Vue from 'vue';

Vue.directive('demo', {
  bind: function(el, binding, vnode) {
    console.log('bind');
    var s = JSON.stringify;
    el.innerHTML =
      'name: ' +
      s(binding.name) +
      '<br>' +
      'value: ' +
      s(binding.value) +
      '<br>' +
      'expression: ' +
      s(binding.expression) +
      '<br>' +
      'argument: ' +
      s(binding.arg) +
      '<br>' +
      'modifiers: ' +
      s(binding.modifiers) +
      '<br>' +
      'vnode keys: ' +
      Object.keys(vnode).join(', ');
  },
  inserted: function(el) {
    console.log('inserted');
  },
  update: function(el) {
    console.log('update');
  },
  componentUpdated: function(el) {
    console.log('componentUpdated');
  },
  unbind: function(el) {
    console.log('unbind');
  }
});
