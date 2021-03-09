import React from 'react';
import { IGotchi } from '../../types';
import { CloseButton } from '../Button';
import './styles.css';

interface IDetailsPanel {
  gotchi: IGotchi;
  closePanel: () => void;
}

export const DetailsPanel = ({ gotchi, closePanel }: IDetailsPanel) => {
  return (
    <div className="details-panel-wrapper">
      <div className="close-btn-container">
        <CloseButton onClick={closePanel} />
      </div>
      <div className="details-panel">
        <div className="details-panel-header">
          <h2>Rarity score: {gotchi.rarityScore}</h2>
        </div>
        <div className="details-content">
          <div className="trait-row">
            <p className="trait">Energy</p>
            <p className="trait-value">({gotchi.numericTraits.energy})</p>
          </div>
          <div className="trait-row">
            <p className="trait">Aggresion</p>
            <p className="trait-value">({gotchi.numericTraits.aggression})</p>
          </div>
          <div className="trait-row">
            <p className="trait">Spookiness</p>
            <p className="trait-value">({gotchi.numericTraits.spookiness})</p>
          </div>
          <div className="trait-row">
            <p className="trait">Brain Size</p>
            <p className="trait-value">({gotchi.numericTraits.brainSize})</p>
          </div>
          <div className="trait-row">
            <p className="trait">Eye Shape</p>
            <p className="trait-value">({gotchi.numericTraits.eyeShape})</p>
          </div>
          <div className="trait-row">
            <p className="trait">Eye Color</p>
            <p className="trait-value">({gotchi.numericTraits.eyeColor})</p>
          </div>
        </div>
        <div className="details-panel-footer"/>
    </div>
    </div>
  )
}