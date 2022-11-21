const cucumber = require('cypress-cucumber-preprocessor').default;
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');

module.exports = (on, config) => {

    on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
    });

    on('task', {
        lighthouse: lighthouse((lighthouseReport) => {
            console.log(lighthouseReport);
        }),
        pa11y: pa11y((pa11yReport) => {
            console.log(pa11yReport);
        }),
        a11y(data) {
            console.log(`======\n Accessibility violations found: [ ${data.length} ]\n======`);
            console.log(data);
            // console.table(data);
            return null;
        },
    });

    on('file:preprocessor', cucumber());
    return config;
};
