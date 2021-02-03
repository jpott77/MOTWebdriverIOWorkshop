# MOTWebdriverIOWorkshop
MOTWebdriverIOWorkshop

Run all tests
ENV=qa npm test

Run login suite
ENV=qa npm run login

Run a single test
ENV=qa npm test -- --spec ./test/specs/ultrafastgrid.test.js

Run Applittools test
APPLITOOLS_API_KEY="API_KEY" ENV=qa npm test -- --spec ./test/specs/ultrafastgrid.test.js
