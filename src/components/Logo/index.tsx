import * as React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import s from './styles.module.scss';
import classNames from 'classnames';

type Props = {
  id?: string;
  variant?: 'primary' | 'secondary';
  width?:string;
  height?:string;
};

export const Logo: FC<Props> = ({ id, variant,width='', height=''}) => {
  return (
    <div id={id} className={s.wrapper} style={{width,height}}>
      <Link href="/">
        <div className={classNames(s.logo, s[`${variant}`])}></div>
      </Link>
    </div>
  );
};
