# PostCSS7 Overflow Overlay Pollify


一款自动为带有 'overflow: overlay' 属性的元素添加 'overflow: auto' 属性的 [PostCSS7] 插件。

```css
/* Input example */
.foo {
  overflow: overlay;
}

/* Output example */
.foo {
  overflow: overlay;
  overflow: auto;
}
```

## 🍳 使用方法

**Step 1:** 安装依赖:

```sh
npm install --save-dev postcss postcss7-overflow-overlay-pollify
```

**Step 2:** 配置插件:

```diff
module.exports = {
  plugins: {
+    'postcss7-overflow-overlay-pollify': {},
  },
};

```

## 📝 效果展示

```css
/* Input */
.foo {
  overflow-x: overlay;
}

/* Output */
.foo {
  overflow-x: overlay;
  overflow-x: auto;
}
```

```css
/* Input */
.foo {
  overflow: hidden overlay;
}

/* Output */
.foo {
  overflow: hidden overlay;
  overflow: hidden auto;
}
```

```css
/* Input */
.foo {
  overflow: overlay !important;
}

/* Output */
.foo {
  overflow: overlay !important;
  overflow: auto !important;
}
```

```css
/* Input */
.foo {
  overflow: overlay;
  overflow: scroll;
}

/* Output */
.foo {
  overflow: overlay;
  overflow: auto;
  overflow: scroll;
}
```

```css
/* Input */
.foo {
  overflow: overlay;
  overflow: overlay;
}

/* Output */
.foo {
  overflow: overlay;
  overflow: auto;
  overflow: overlay;
}
```
