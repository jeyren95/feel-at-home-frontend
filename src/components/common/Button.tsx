import { ReactElement, ComponentPropsWithoutRef } from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps extends ComponentPropsWithoutRef<typeof MuiButton> {
  text: string;
}

const Button = ({ text, type, onClick, disabled }: ButtonProps): ReactElement => (
  <MuiButton type={type} onClick={onClick} disabled={disabled}>
    {text}
  </MuiButton>
);

export default Button;
