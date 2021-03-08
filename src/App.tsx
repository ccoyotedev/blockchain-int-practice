import React, { useEffect, useState } from 'react';
import { Button, InfoButton } from './components/Button';
import { Gotchi } from './components/Gotchi';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import './App.css';
import { DetailsPanel } from './components/DetailsPanel';
import { IGotchi } from './types';
const diamondAbi = require('./abi/diamond.json');

const aavegotchiAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d'

function App() {
  const [ account, setAccount ] = useState('');
  const [ contract, setContract ] = useState<Contract | null>(null);
  const [ gotchis, setGotchis ] = useState<IGotchi[]>();
  const [ gotchiSVG, setGotchiSVG ] = useState<string>();
  const [ selectedGotchi, setSelectedGotchi ] = useState<IGotchi>();
  const [ viewDetails, setViewDetails ] = useState(false);

  const loadBlockchainData = async() => {
    const web3 = new Web3(Web3.givenProvider)
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0]);
    const aaveContract = new web3.eth.Contract(diamondAbi, aavegotchiAddress)
    setContract(aaveContract);
    const gotchis = await aaveContract.methods.allAavegotchisOfOwner(accounts[0]).call();
    const updatedGotchis: IGotchi[] = gotchis.map((gotchi: any) => {
      const numericTraits = gotchi["modifiedNumericTraits"] as string[];

      return (
        {
          tokenId: parseInt(gotchi["tokenId"]),
          name: gotchi["name"],
          status: parseInt(gotchi["status"]),
          numericTraits: {
            energy: parseInt(numericTraits[0]),
            aggression: parseInt(numericTraits[1]),
            spookiness: parseInt(numericTraits[2]),
            brainSize: parseInt(numericTraits[3]),
            eyeShape: parseInt(numericTraits[4]),
            eyeColor: parseInt(numericTraits[5]),
          },
          kinship: parseInt(gotchi['kinship']),
          lastInteracted: parseInt(gotchi['lastInteracted']),
          level: parseInt(gotchi['level']),
          rarityScore: parseInt(gotchi['modifiedRarityScore']),
        }
      )
    })
    setGotchis(updatedGotchis);
    setSelectedGotchi(updatedGotchis[0]);
  }


  useEffect(() => {
    loadBlockchainData()
  }, [])

  useEffect(() => {
    const setAavegotchiSVG = async (tokenId: number) => {
      const svg = await contract?.methods.getAavegotchiSvg(tokenId).call();
      setGotchiSVG(svg);
    }

    if (selectedGotchi) {
      setAavegotchiSVG(selectedGotchi.tokenId)
    }
  }, [ selectedGotchi, contract ])


  return (
    <div className="App">
      <main className="panel">
        {selectedGotchi === undefined
          ? <h1>Loading</h1>
          : viewDetails
          ? <DetailsPanel gotchi={selectedGotchi} /> 
          : 
            <>
              <div className="full-width">
                <div className="yellow-panel full-width">
                  <h1 className="gotchi--name">{selectedGotchi.name}</h1>
                </div>
                <div className="level-container">
                  <h2>Level: {selectedGotchi.level}</h2>
                  <div className="info-button-container">
                    <InfoButton onClick={() => setViewDetails(true)} />
                  </div>
                </div>
              </div>
              <Gotchi svgData={gotchiSVG} />
              
              <Button onClick={() => null}>Pet</Button>
            </>
          }
      </main>
    </div>
  );
}

export default App;
