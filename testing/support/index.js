//import './commands';
//import '@cypress/support';
// import 'cypress-audit/commands';
// import 'cypress-axe';

beforeEach(() => {
  Cypress.config('interceptions', {});
  window.localStorage.setItem('cookie-notice', false);
});
