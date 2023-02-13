import React from 'react';

import { screen, render } from '@testing-library/react';

import { Button } from './Button';

let button: HTMLButtonElement;

describe('when rendered without props', () => {
  beforeEach(() => {
    render(<Button title="Hello" style={{ color: 'blue' }} />);
    button = screen.getByRole('button');
  });
  test('should render a button with type "button"', () => {
    expect(button).toHaveAttribute('type', 'button');
  });
});

describe('when using class names and styles from context', () => {
  beforeEach(() => {
    render(<Button title="Red button" style={{ color: 'red' }} />);

    button = screen.getByRole('button');
  });

  test('should apply the style', () => {
    expect(button).toHaveStyle({ color: 'red' });
  });
});
