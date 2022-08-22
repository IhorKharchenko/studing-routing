import React from 'react';
import PropTypes from 'prop-types';
import { Controls } from './Controls';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = { initialValue: PropTypes.number.isRequired };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  handleDerement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDerement}
        />
        {/* <div>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDerement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}
