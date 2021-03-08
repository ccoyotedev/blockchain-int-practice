import React from 'react';
import './styles.css';

interface IButton {
  children: React.ReactNode,
  onClick: () => void,
}

export const Button = (props: IButton) => {
  return (
    <div className="gotchi--button-wrapper">
      <button className="gotchi--button" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  )
}

export const InfoButton = (props: { onClick: () => void }) => {
  return (
    <div className="gotchi--button-wrapper">
      <button className="gotchi--info-button" onClick={props.onClick}>
        i
      </button>
    </div>
  )
}