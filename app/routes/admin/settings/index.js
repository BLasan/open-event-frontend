import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.l10n.t('System');
  },
  actions: {
    willTransition() {
      this.controller.model.rollbackAttributes();
    }
  }
});
