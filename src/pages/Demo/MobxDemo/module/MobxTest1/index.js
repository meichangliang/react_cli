/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-17 14:50:37
 */
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject('store') // 将store注入到当前组件中
@observer // 将该组件变成响应式组件
class MobxTest1 extends Component {
  handelPlus = () => {
    this.props.store.homeStore.plus();
  };
  handelMinus = () => {
    this.props.store.homeStore.minus();
  };
  handleChange = () => {
    this.props.store.homeStore.change('哈哈哈哈，成功！');
  };
  render() {
    return (
      <div>
        <h1>Mobx_1 Test</h1>
        <h2>homeStore.text: {this.props.store.homeStore.text}</h2>
        <h2>homeStore.num: {this.props.store.homeStore.num}</h2>
        <h3>otherStore.str: {this.props.store.otherStore.str}</h3>
        <h3>homeStore.computed: {this.props.store.homeStore.plusNum}</h3>
        调用action:
        <br />
        <button onClick={this.handelMinus}>减</button>
        <button onClick={this.handelPlus}>加</button>
        <button onClick={this.handleChange}>改变 homeStore.text</button>
      </div>
    );
  }
}

export default MobxTest1;
