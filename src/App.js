import {useContext} from 'react';
import Wallet from './Components/Wallet';
import SelectCharacter from './Components/SelectCharacter';
import {WalletContext} from './Providers/Wallet';

const App = () => {
    const {isConnected} = useContext(WalletContext);

    return (
        <div className="container mx-auto px-4">
            <div className="sm:w-[608px] mt-8 mx-auto rounded shadow-md bg-white overflow-hidden">
                <div className="relative p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-500"/>
                    <h1 className="relative text-4xl text-center font-bold m-0 p-6 uppercase drop-shadow text-white">
                        ⚔ Buildspace Game
                    </h1>
                    <p className="relative text-white text-sm text-center">Contract: {process.env.REACT_APP_CONTRACT_ADDRESS}</p>
                </div>

                <div className="bg-purple-50 p-4">
                    <Wallet/>
                </div>

                {isConnected && (
                    <div className="p-4">
                        <SelectCharacter/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
