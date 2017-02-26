import { expect } from 'chai';
import mount from '../mount';

describe('Check vm.b() generation func', () => {
  it('vm.b() is function', (done) => {
    const vm = mount({
      name: 'test',
      template: '<div>Test</div>',
    });
    expect(vm.b).to.be.a('function');
    vm.$destroy();
    done();
  });

  it('vm.b() return string', (done) => {
    const vm = mount({
      block: 'block',
      template: '<div>Test</div>',
    });
    expect(vm.b()).to.be.a('string');
    vm.$destroy();
    done();
  });

  it('bem[block] prefer than name of component', (done) => {
    const vm = mount({
      name: 'test',
      block: 'block', // prefer than component name "test"
      template: '<div>Test</div>',
    });
    expect(vm.b()).to.equal('block');
    vm.$destroy();
    done();
  });
});
