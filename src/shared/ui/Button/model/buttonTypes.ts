import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type TButtonSize = 'lg' | 'full';
export type TButtonVariant = 'primary';

export type ButtonType = Omit<
  ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
  'prefix'
>;
