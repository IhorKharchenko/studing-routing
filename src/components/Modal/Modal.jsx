import React, { Component } from 'react';
import * as SM from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', event => {
      console.log(event.code);
      event.code === 'Escape' && this.props.onClose();
      // if (e.code === 'Escape') {
      //   this.props.onClose();
      // }
    });
  }
  componentWillUnmount() {}
  render() {
    return createPortal(
      <SM.StyledBackdrop>
        <SM.StyledContent>{this.props.children}</SM.StyledContent>
      </SM.StyledBackdrop>,
      modalRoot
    );
  }
}
