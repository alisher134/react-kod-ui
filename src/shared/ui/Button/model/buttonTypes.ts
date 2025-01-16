import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type TButtonSize = 'sm' | 'lg' | 'full';
export type TButtonVariant = 'primary' | 'secondary';

export type ButtonType = Omit<
  ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
  'prefix'
>;
