import { expect } from 'chai';
import bemCnLite from 'bem-cn-lite';
import mount from '../mount';

describe('Render generated class names', () => {
  // setup default plugin config
  const setup = {
    el: '__',
    mod: '--',
    modValue: '-',
  };

  it('block', (done) => {
    const name = 'block';
    bemCnLite.setup(setup);
    const block = bemCnLite(name);

    const vm = mount({
      name,
      template: '<div :class="b()"></div>',
    });
    expect(vm.$el.className).to.equal(block());

    bemCnLite.reset();
    vm.$destroy();
    done();
  });

  it('block--mod-val', (done) => {
    const name = 'block';
    bemCnLite.setup(setup);
    const block = bemCnLite(name);

    const vm = mount({
      name,
      template: '<div :class="b({mod: \'val\'})"></div>',
    });
    expect(vm.$el.className).to.equal(block({ mod: 'val' }));

    bemCnLite.reset();
    vm.$destroy();
    done();
  });

  it('elem', (done) => {
    const name = 'block';
    bemCnLite.setup(setup);
    const block = bemCnLite(name);

    const vm = mount({
      name,
      template: '<div :class="b(\'elem\')"></div>',
    });
    expect(vm.$el.className).to.equal(block('elem'));

    bemCnLite.reset();
    vm.$destroy();
    done();
  });

  it('elem--mod-val', (done) => {
    const name = 'block';
    bemCnLite.setup(setup);
    const block = bemCnLite(name);
    const vm = mount({
      block: name,
      template: '<div :class="b(\'elem\', {mod: \'val\'})"></div>',
    });
    expect(vm.$el.className).to.equal(block('elem', { mod: 'val' }));

    bemCnLite.reset();
    vm.$destroy();
    done();
  });

  it('block--mod-val mix', (done) => {
    const name = 'block';
    bemCnLite.setup(setup);
    const block = bemCnLite(name);

    const vm = mount({
      name,
      template: '<div :class="b({mod: \'val\'}, \'mix\')"></div>',
    });
    expect(vm.$el.className).to.equal(block({ mod: 'val' }, 'mix'));

    bemCnLite.reset();
    vm.$destroy();
    done();
  });

  it('elem--mod-val mix', (done) => {
    const name = 'block';
    bemCnLite.setup(setup);
    const block = bemCnLite(name);

    const vm = mount({
      name,
      template: '<div :class="b(\'elem\', {mod: \'val\'}, \'mix\')"></div>',
    });
    expect(vm.$el.className).to.equal(block('elem', { mod: 'val' }, 'mix'));

    bemCnLite.reset();
    vm.$destroy();
    done();
  });

  it('Custom settings', (done) => {
    const name = 'block';
    const config = {
      ns: 'ns-',
      el: '++',
      mod: '~~',
      modValue: '-',
    };

    bemCnLite.setup(config);
    const block = bemCnLite(name);

    const vm = mount({
      name,
      template: '<div :class="b(\'elem\', {mod: \'val\'})"></div>',
    }, config);
    expect(vm.$el.className).to.equal(block('elem', { mod: 'val' }));

    bemCnLite.reset();
    vm.$destroy();
    done();
  });
});
