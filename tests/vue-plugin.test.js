import { mount, createLocalVue } from 'vue-test-utils';
import vueBemCn from '../dist/vue-bem-cn.umd.min';

describe('Check installation', () => {
  const comp = {
    template: '<div>Hello</div>',
  };
  const localVue = createLocalVue();

  localVue.use(vueBemCn);
  const { vm } = mount(comp, { localVue });

  test('Expect vm.b() is undefined', () => {
    expect(vm.b).toBeUndefined();
  });

  test('Expect normal render after install without vm.b()', () => {
    expect(vm.$el.textContent).toBe('Hello');
  });
});

describe('Check vm.b() method', () => {
  const localVue = createLocalVue();
  localVue.use(vueBemCn);

  const comp = {
    name: 'hello',
    template: '<div>Hello</div>',
  };
  const { vm } = mount(comp, { localVue });

  test('Expect vm.b() is function', () => {
    expect(vm.b).toEqual(expect.any(Function));
  });

  test('Expect vm.b() return corrent string', () => {
    expect(vm.b()).toBe('hello');
  });

  test('Expect bem[block] prefer than name of component', () => {
    const compBlock = {
      ...comp,
      block: 'bonjour',
    };
    const { vm: vmBlock } = mount(compBlock, { localVue });
    expect(vmBlock.b()).toBe('bonjour');
  });
});

describe('Check custom settings', () => {
  const block = 'BlockName';
  const elem = 'elementName';
  const mods = {
    hasMod: true,
    mod: 'val',
  };

  const comp = {
    name: block,
    template: '<div>Hello</div>',
  };

  test('Expect function for custom method name', () => {
    const localVue = createLocalVue();
    const config = {
      methodName: 'bem',
    };

    localVue.use(vueBemCn, config);
    const { vm } = mount(comp, { localVue });

    expect(vm.bem).toEqual(expect.any(Function));
  });

  test('Expect corrent string for custom delimiters', () => {
    const localVue = createLocalVue();
    const expectedString = `ns-${block}+${elem} ns-${block}+${elem}==hasMod ns-${block}+${elem}==mod__val`;
    const config = {
      delimiters: {
        ns: 'ns-',
        el: '+',
        mod: '==',
        modVal: '__',
      },
    };

    localVue.use(vueBemCn, config);
    const { vm } = mount(comp, { localVue });

    expect(vm.b(elem, mods)).toBe(expectedString);
  });

  test('Expect correct block string for hyphenate option and early exit (no arguments)', () => {
    const localVue = createLocalVue();
    const expectedString = 'block-name';
    const config = {
      hyphenate: true,
    };

    localVue.use(vueBemCn, config);
    const { vm } = mount(comp, { localVue });

    expect(vm.b()).toBe(expectedString);
  });

  test('Expect correct block string for hyphenate option with mods', () => {
    const localVue = createLocalVue();
    const expectedString = 'block-name block-name--has-mod block-name--mod-val';
    const config = {
      hyphenate: true,
    };

    localVue.use(vueBemCn, config);
    const { vm } = mount(comp, { localVue });

    expect(vm.b(mods)).toBe(expectedString);
  });

  test('Expect correct element string for hyphenate option', () => {
    const localVue = createLocalVue();
    const expectedString = 'block-name__element-name block-name__element-name--has-mod block-name__element-name--mod-val';
    const config = {
      hyphenate: true,
    };

    localVue.use(vueBemCn, config);
    const { vm } = mount(comp, { localVue });

    expect(vm.b(elem, mods)).toBe(expectedString);
  });
});
