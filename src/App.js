import {useContext, useEffect} from 'react';
import Wallet from './Components/Wallet';
import SelectCharacter from './Components/SelectCharacter';
import {WalletContext} from './Providers/Wallet';
import useCharacter from "./Hooks/useCharacter";
import YourCharacter from "./Components/YourCharacter";
import useGameContract from "./Hooks/useGameContract";

const App = () => {
    const {isConnected} = useContext(WalletContext);
    const [character, hasCharacter, tokenId] = useCharacter();

    return (
        <div className="container mx-auto p-3 sm:p-8">
            <div className="sm:w-[608px] mx-auto rounded shadow-md bg-white overflow-hidden">
                <div className="relative p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-500"/>
                    <h1 className="relative text-4xl text-center font-bold m-0 p-6 uppercase drop-shadow text-white">
                        ⚔ Buildspace Pokémon
                    </h1>
                    <p className="relative text-white text-sm text-center break-words">Contract: {process.env.REACT_APP_CONTRACT_ADDRESS}</p>
                </div>

                <div className="bg-purple-50 p-4">
                    <Wallet/>
                </div>

                {isConnected && (
                    <div className="p-4">
                        {/*{hasCharacter*/}
                        {/*    ? <YourCharacter character={character} tokenId={tokenId}/>*/}
                        {/*    : <SelectCharacter/>*/}
                        {/*}*/}
                        {hasCharacter && <YourCharacter character={character} tokenId={tokenId}/>}
                        <div className="mt-4">
                            <SelectCharacter/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
