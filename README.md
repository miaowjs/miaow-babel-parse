# miaow-babel-parse

> Miaow的Babel编译工具,只是对[Babel](https://babeljs.io)进行简单封装

## 效果示例

```javascript
export default React.createClass({
  getInitialState() {
    return {num: this.getRandomNumber()};
  },

  getRandomNumber(): number {
    return Math.ceil(Math.random() * 6);
  },

  render(): any {
    return <div>
      Your dice roll:
      {this.state.num}
    </div>;
  }
});

/* 处理后 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = React.createClass({
  displayName: "unknown",

  getInitialState: function getInitialState() {
    return { num: this.getRandomNumber() };
  },

  getRandomNumber: function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      "Your dice roll:",
      this.state.num
    );
  }
});
module.exports = exports["default"];
```

### 参数说明

传入的参数会原封不动的传递给Babel, 请参考[Babel的文档](https://babeljs.io/docs/usage/options/)选择对应的参数
