import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type TButtonSize = 'md' | 'lg' | 'full';
export type TButtonVariant = 'primary' | 'secondary';

export type ButtonType = Omit<
  ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
  'prefix'
>;
