import React, { useState } from 'react';
import './App.css';
import { AssetInstance } from './common/types';
import AssetLib from './components/AssetLibrary';
import Paper from './components/Paper';
import PropertiesPanel from './components/PropertiesPanel';

function App() {
  const [selectedInstance, setSelectedInstance] = useState<AssetInstance>();

  const onInstanceSelection = (instance: AssetInstance|undefined) => {
    setSelectedInstance(instance);
  }

  return (
    <div className="App">
      <AssetLib />
      <Paper onInstanceSelection={onInstanceSelection} />
      {selectedInstance &&
        <PropertiesPanel instance={selectedInstance} />
      }
    </div>
  );
}

export default App;
