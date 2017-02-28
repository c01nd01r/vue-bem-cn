#  vue-bem-cn
[![Travis](https://travis-ci.org/c01nd01r/vue-bem-cn.svg?branch=master)](https://travis-ci.org/c01nd01r/vue-bem-cn/)
[![npm](https://img.shields.io/npm/v/vue-bem-cn.svg)](https://www.npmjs.com/package/vue-bem-cn)

Simple [BEM](http://getbem.com/)-style class name generator for Vue.JS, based on [bem-cn-lite](https://github.com/mistakster/bem-cn-lite)


## Table of Contents

* [Quick example](#quick-example)
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)

## Quick example
Live demo: [codepen](http://codepen.io/c01nd01r/pen/Qdeovv)

Block **btn**. Vue [Single File Component](https://vuejs.org/v2/guide/single-file-components.html):
```vue
<script>
  export default {
    name: 'btn', // set BEM block name
    props: ['size', 'look', 'type', 'icon'],
  }
</script>

<template>
  <button :class="b({ size, look })" :type="type">
    <span :class="b('text', {look})">
      <i v-if="icon" :class="b('icon', { icon })"> 👍 </i>
      <slot></slot>
    </span>
  </button>
</template>
```

Using **btn** block in App.vue:

```vue
<script>
  import Btn from 'components/btn.vue';

  export default {
    components: { Btn },
  }
</script>

<template>
  <div class="example">
    <btn type="button" class="mix-any-class" size="large" look="primary" icon="emoji"> I am BEM button! </btn>
  </div>
</template>

```

Will be compile to:

```html
<div class="example">
 <button class="mix-any-class btn btn--size-large btn--look-primary" type="button">
    <span class="btn__text btn__text--look-primary">
    <i class="btn__icon btn__icon--icon-emoji">👍 </i>
      I am BEM button!
    </span>
  </button>
</div>
```

## Installation
* from [npm](https://www.npmjs.com/package/vue-bem-cn):

`npm i --save vue-bem-cn` / `yarn add vue-bem-cn`

And install with `Vue.use()` in your `main.js`:

```javascript
import vueBemCn from 'vue-bem-cn';

Vue.use(vueBemCn, {/* Your config, not required. See below */});

new Vue({...});
```


* from CDN:

```html
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/vue-bem-cn/dist/vue-bem-cn.umd.min.js"></script>
<script>
  Vue.use(vueBemCn, {/* Your config, not required. See below */});

  new Vue({...});
</script>
```

## Usage

For class name generation, enough to call `b()` method with `v-bind:class` or use `:class` in your template.
The Block name will be receive from `name` field of component or `block` field:
```vue
<script>
  export default {
    name: 'btn',
  }
</script>

<template>
  <div :class="b()"> DIV tag will receive 'btn' class name </div>
</template>
```
More examples in [API section](#api)

After component initialization (`created` lifecycle hook), every component, that has data in `name` or `block` fields recive  `b()` method.
Also, you can call `this.b()` method in your component, if you need it.

### Q: What if I don't want to use `name` field for Block name? And what is `block` field ?

If you want, you can use `block` field instead of `name`, but keep in mind, **`block` prefer then `name`**:

```vue
<script>
export default {
  name: 'btn',
  block: 'bem-button', // prefer then `name: 'btn'`
}
</script>

<template>
  <div :class="b()"> DIV tag will receive 'bem-button' class name </div>
</template>
```

### Q: I will want use another delimiters for BEM entities. And still I need namespances.

No problem. You can set your settings object with `Vue.use()` as second argument:

```vue
<script>
  import Vue from 'vue';
  import vueBemCn from 'vue-be-cn';

  // default settings
  const bemConfig = {
    ns: '', // namespace
    el: '__', // element delimeter
    mod: '--', // modifier delimeter
    modValue: '-', // value delimeter for modifier
  }

  Vue.use(vueBemCn, bemConfig);

  new Vue({...});

</script>
```

## API

### Block
Generate block name.

```vue
<script>
  export default {
    name: 'btn',
  }
</script>

<template>
  <div :class="b()"> DIV tag will receive 'btn' class name </div>
</template>
```

### Modifier of Block
Generate modifier of block name.

```vue
<script>
  export default {
    name: 'btn',
  }
</script>

<template>
  <div :class="b({size: 'large'})"> DIV tag will receive 'btn btn--size-large' class name </div>
</template>
```

### Element of Block
Generate element of block name.

```vue
<script>
  export default {
    name: 'btn',
  }
</script>

<template>
  <div :class="b('text')"> DIV tag will receive 'btn__text' </div>
</template>
```
### Modifier of Element
Generate modifier of element name.

```vue
<script>
  export default {
    name: 'btn',
  }
</script>

<template>
  <div :class="b('text', {look: primary})"> DIV tag will receive 'btn__text btn__text--look-primary' class name </div>
</template>
```

### Mixins
Mix class names to block/element.

* with vue-bem-cn in your component:

```vue
<script>
  export default {
    name: 'btn',
  }
</script>

<template>
  <div>
    <div :class="b(false, 'block-mixin')"> DIV tag will receive 'btn block-mixin' class name </div>
    <div :class="b('text', 'element-mixin')"> DIV tag will receive 'btn__text element-mixin' class name </div>
  </div>
</template>
```

* with Vue class attribute in parent component:

```vue
<script>
  import Btn from 'components/Btn.vue';

  export  default {
    name: 'form',
    components: { Btn },
  }
</script>

<template>
  <form :class="b()">
    <btn :class="b('button')"> Btn root tag will receive 'form__button btn' class name </btn>
  </form>
</template>
```
