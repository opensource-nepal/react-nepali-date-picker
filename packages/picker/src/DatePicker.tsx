import React from 'react';

import { CustomType } from 'types/BaseTypes';

import { Button } from './components/Button';

export type DatePickerProps =
  | {
      abc?: boolean;
    }
  | CustomType;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DatePicker(props: DatePickerProps): JSX.Element {
  return (
    <div>
      Nepali Date Picker
      <Button title="DatePicker" className="btncolor" />
    </div>
  );
}
