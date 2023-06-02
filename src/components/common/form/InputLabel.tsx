import { ReactElement, ComponentPropsWithoutRef } from 'react';
import { InputLabel as MuiInputLabel } from '@mui/material';
import cn from 'classnames';

interface InputLabelProps extends ComponentPropsWithoutRef<typeof MuiInputLabel> {
  label: string;
  htmlFor: string;
}

const InputLabel = ({ label, htmlFor, className }: InputLabelProps): ReactElement => (
  <MuiInputLabel htmlFor={htmlFor} className={cn('input-label', className)}>
    {label}
  </MuiInputLabel>
);

export default InputLabel;
