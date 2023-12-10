import React from 'react';
import { FC, ImgHTMLAttributes } from 'react';
import { IoEarth } from 'react-icons/io5';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

interface WithChildren {}

export const Avatar: FC<AvatarProps & WithChildren> = ({
  className = '',
  src,
  alt = 'avatar',
  children,
  ...props
}) => {
  if (src) {
    return (
      <img className={`avatar ${className}`} src={src} alt={alt} {...props} />
    );
  }

  return (
    <span className={`avatar-default ${className}`}>
      {children || <IoEarth size={20} className="text-gray-300" />}
    </span>
  );
};
