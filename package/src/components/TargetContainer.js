import Vue from 'vue';
export default Vue.extend({
  // as an abstract component, it doesn't appear in
  // the $parent chain of components.
  // which means the next parent of any component rendered inside of this oen
  // will be the parent from which is was sent
  // @ts-expect-error
  abstract: true,
  name: 'PortalOutlet',
  props: ['nodes', 'tag'],
  data: function data(vm) {
    return {
      updatedNodes: vm.nodes
    };
  },
  render: function render(h) {
    var nodes = this.updatedNodes && this.updatedNodes();
    if (!nodes) return h();
    return nodes.length === 1 && !nodes[0].text ? nodes : h(this.tag || 'DIV', nodes);
  },
  destroyed: function destroyed() {
    var el = this.$el.parentNode ? this.$el : this.updatedNodes()[0].elm;
    el.parentNode.removeChild(el);
  }
});