import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FieldContext } from './FieldContext';
import { StyledTextarea } from './styles';

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement, // New type for `ref` consumers
  TextareaProps // New component props
>(({ isResizable, ...props }, ref) => {
  const id = useContext(FieldContext);

  return (
    <StyledTextarea ref={ref} id={id} isResizable={isResizable} {...props} />
  ); // New styled element
});

Textarea.defaultProps = {
  isResizable: true,
};

Textarea.propTypes = {
  isResizable: PropTypes.bool,
};

Textarea.displayName = 'Field.Textarea'; // Updated display name
