exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
 framework: 'jasmine',
  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
    newEnrollmentPage: ['./tests/*.spec.js'],
  },
  // Special option for Angular2, to test against all Angular2 applications
  // on the page. This means that Protractor will wait for every app to be
  // stable before each action, and search within all apps when finding
  // elements.
  useAllAngular2AppRoots: true,
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};