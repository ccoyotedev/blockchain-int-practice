import React from 'react';
import { IGotchi } from '../../types';
import './styles.css';

interface IDetailsPanel {
  gotchi: IGotchi;
}

export const DetailsPanel = ({ gotchi }: IDetailsPanel) => {
  return (
    <div className="details-panel">
      <div className="details-panel-header">
        <h2>Rarity score: {gotchi.rarityScore}</h2>
      </div>
      <div className="details-panel-footer"/>
    </div>
  )
}