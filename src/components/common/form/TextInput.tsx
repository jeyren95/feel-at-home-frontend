import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { Input as MuiInput } from '@mui/material';
import { useField } from 'formik';
import cn from 'classnames';

const TextInput = ({
  name,
  type,
  id,
  className,
}: ComponentPropsWithoutRef<typeof MuiInput>): ReactElement => {
  const [{ value, onChange }, { touched, error }] = useField(name as string);
  return (
    <>
      <MuiInput
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        className={cn('text-input', className)}
      />
      {touched && error && <div className="text-input__error">{error}</div>}
    </>
  );
};

export default TextInput;
