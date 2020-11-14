import React from 'react';
import energyshield from '../assets/energyshield.svg';
import './AssetLib.css';

function AssetLib() {
  return (
    <div className="assetlib">
      <div className="assetlist">
        <img src={energyshield} className="asset" />
        <img src={energyshield} className="asset" />
        <img src={energyshield} className="asset" />
      </div>
    </div>
  );
}

export default AssetLib;
