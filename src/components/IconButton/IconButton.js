import React from 'react';
import PropTypes from 'prop-types';
import { StyledIconButton } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <StyledIconButton
      type="button"
      className="IconButton"
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
