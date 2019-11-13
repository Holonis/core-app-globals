const REQUIRE_PATH = '../../src/index';

const { expect, proxyquire, stubs } = require('@holonis/core-test-kit');

let subject;

describe('core-app index', () => {
  beforeEach('reset the subject', () => {
    subject = proxyquire(REQUIRE_PATH, {});
  });

  afterEach('reset stubs', () => {
    stubs.reset();
  });

  it('must remember and return the log we set', () => {
    subject.setLog('THE_LOG');

    expect(subject.getLog()).to.equal('THE_LOG');
  });

  it('must remember and return the config we set', () => {
    subject.setConfig('THE_CONFIG');

    expect(subject.getConfig()).to.equal('THE_CONFIG');
  });
});
