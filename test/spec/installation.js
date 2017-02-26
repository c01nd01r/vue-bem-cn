import { expect } from 'chai';
import mount from '../mount';

describe('Installation', () => {
  it('vm.b() is undefined', (done) => {
    const vm = mount({
      template: '<div>Test</div>',
    });
    expect(vm.b).to.be.undefined;
    vm.$destroy();
    done();
  });

  it('Normal render after install without vm.b()', (done) => {
    const vm = mount({
      template: '<div>Test</div>',
    });
    expect(vm.$el.textContent).to.equal('Test');
    vm.$destroy();
    done();
  });
});
