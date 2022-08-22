import React, { Component } from 'react';

export class Dropdown extends Component {
  state = {
    visible: false,
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && <div>Выпадающее меню</div>}
      </div>
    );
  }
}
