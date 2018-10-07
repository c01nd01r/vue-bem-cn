import bemCn from './bem-cn/index';
import { DEFAULT_DELIMITERS, DEFAULT_CONFIG } from './globals';
import { isString } from './utils';

export default {
  install(Vue, config = { delimiters: {} }) {
    const cfg = {
      ...DEFAULT_CONFIG,
      ...config,
      delimiters: {
        ...DEFAULT_DELIMITERS,
        ...config.delimiters,
      },
    };

    Vue.mixin({
      created() {
        const block = this.$options.block || this.$options.name;
        let generator = null;

        if (!isString(block)) return;

        generator = bemCn(cfg.delimiters.ns + block, cfg);

        this[cfg.methodName] = (...args) => generator(...args);
      },
    });
  },
};
