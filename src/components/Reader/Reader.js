import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';
const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    publicationIdx: 0,
  };
  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ publicationIdx: Number(savedState) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.publicationIdx !== this.state.publicationIdx) {
      localStorage.setItem(LS_KEY, this.state.publicationIdx);
    }
  }
  onChangeIdx = value => {
    this.setState(prevState =>
      prevState.publicationIdx === 0 && value === -1
        ? {
            publicationIdx: this.props.items.length - 1,
          }
        : prevState.publicationIdx === this.props.items.length - 1 &&
          value === 1
        ? { publicationIdx: 0 }
        : {
            publicationIdx: prevState.publicationIdx + value,
          }
    );
  };
  //   onPrev = () => {
  //     this.setState(
  //       prevState =>
  //         prevState.publicationIdx > 0 && {
  //           publicationIdx: prevState.publicationIdx - 1,
  //         }
  //     );
  //   };
  //   onNext = () => {
  //     this.setState(
  //       prevState =>
  //         prevState.publicationIdx < this.props.items.length - 1 && {
  //           publicationIdx: prevState.publicationIdx + 1,
  //         }
  //     );
  //   };

  render() {
    return (
      <div>
        <Controls
          current={this.state.publicationIdx + 1}
          total={this.props.items.length}
          onChangeIdx={this.onChangeIdx}
        />

        <Progress
          current={this.state.publicationIdx + 1}
          total={this.props.items.length}
        />
        <Publication item={this.props.items[this.state.publicationIdx]} />
      </div>
    );
  }
}
