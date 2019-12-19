const REQUIRE_PATH = '../../src/index';

const { expect, proxyquire, stubs } = require('@holonis/core-test-kit');

let subject;

describe('index', () => {
  afterEach('reset stubs', () => {
    stubs.reset();
  });

  it('must return the existing globals if they are there', () => {
    global.___appGlobals = 'THE_EXISTING_APP_GLOBALS';
    subject = proxyquire(REQUIRE_PATH, {
      './AppGlobals': stubs.classStub('AppGlobals'),
    });

    expect(subject).to.equal('THE_EXISTING_APP_GLOBALS');
  });

  it('must return the a newly defined globals if there is not one already', () => {
    global.___appGlobals = undefined;
    subject = proxyquire(REQUIRE_PATH, {
      './AppGlobals': stubs.classStub('AppGlobals'),
    });

    expect(subject).to.equal(global.___appGlobals);
  });
});
