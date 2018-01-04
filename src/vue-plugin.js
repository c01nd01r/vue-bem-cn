import bemCn from './bem-cn/index';

export default {
  install(Vue, config = { delimiters: {} }) {
    const cfg = {
      hyphenate: false,
      methodName: 'b',
      ...config,
      delimiters: {
        ns: '',
        el: '__',
        mod: '--',
        modVal: '-',
        ...config.delimiters,
      },
    };

    Vue.mixin({
      created() {
        const block = this.$options.block || this.$options.name;
        let generator = null;

        if (typeof block !== 'string') return;

        generator = bemCn(block, cfg);
        this[cfg.methodName] = (...args) => generator(...args);
      },
    });
  },
};
