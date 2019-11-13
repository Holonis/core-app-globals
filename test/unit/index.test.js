const REQUIRE_PATH = '../../src/index';

const { expect, proxyquire, stubs } = require('@holonis/core-test-kit');

const appRootPath = stubs.objectStub('appRootPath', 'require');
let subject;

describe('core-app index', () => {
  beforeEach('reset the subject', () => {
    stubs.appRootPath.require.withArgs('/package.json').returns({ name: 'THE_NAME', version: 'THE_VERSION' });
  });

  afterEach('reset stubs', () => {
    stubs.reset();
  });

  it('must have the application name from package.json', () => {
    subject = proxyquire(REQUIRE_PATH, { 'app-root-path': appRootPath });

    expect(subject).to.have.a.property('name').that.equals('THE_NAME');
  });

  it('must have the application version from package.json', () => {
    subject = proxyquire(REQUIRE_PATH, { 'app-root-path': appRootPath });

    expect(subject).to.have.a.property('version').that.equals('THE_VERSION');
  });
});
