import { type ComponentPropsWithRef, forwardRef } from 'react';
import styles from './button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'>>((props, ref) => {
  return (
    <button {...props} className={styles['button']}/>
  );
});

export default Button;
