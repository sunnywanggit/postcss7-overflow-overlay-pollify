const postcss = require('postcss');

module.exports = postcss.plugin('postcss7-overflow-overlay-pollify', function () {

  return function (root, result) {
    let skipped = Symbol('isSkipped'); // skipped flag
    let counter = Symbol('skippedCounter'); // 用来测试 "isSkipped" 优化

    root.walkDecls(decl => {
      let rule = decl.parent;
      rule[counter] = Number.isInteger(rule[counter]) ? rule[counter] : 0;
      if (!rule[skipped]) {
        let values = decl.value.split(' ');
        if (values.includes('overlay')) {
          // TODO 这部分的逻辑暂时先不处理
          // const annotation = decl.prev();
          // if (annotation && annotation.type === 'comment') {
          //   if (/overflow:\s*(auto)/i.test(annotation.text)) {
          //     annotation.remove();
          //     return;
          //   }
          // }
          decl.cloneAfter({
            prop: decl.prop,
            value: values.map(v => (v === 'overlay' ? 'auto' : v)).join(' '),
            important: decl.important
          });
          rule[skipped] = true;
          rule[counter]++;
        }
      }
    })
  }
})
