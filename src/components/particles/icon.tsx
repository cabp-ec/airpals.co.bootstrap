import React from 'react';

export interface IconProps {
  icon: string;
  className?: string | undefined | null;
}

export const Icon: React.FC<IconProps> = ({ icon, className }: IconProps) => {
  return <i className={ `bi bi-${ icon } ${ className ? className : '' }` }/>;
};
