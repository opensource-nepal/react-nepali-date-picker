import React, { forwardRef } from 'react';

export type ButtonProps = { title: string } | JSX.IntrinsicElements['button'];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <button {...props} ref={ref} type="button">
        {props.title}
      </button>
    );
  }
);
