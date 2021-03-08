import React from 'react';
import './styles.css';

export const Gotchi = (props: {svgData: string | undefined}) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.svgData || ''}}
      className="gotchi--img-container"
    />
  )
}