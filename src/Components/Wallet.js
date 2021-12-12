import {useContext} from 'react';
import {WalletContext} from '../Providers/Wallet';

const Wallet = () => {
    const { connectedWalletAddress, isConnected, connectWallet, disconnectWallet }  = useContext(WalletContext);

    if (isConnected) {
        return (
            <div>
                <div className="text-lg font-bold text-gray-700">Connected to wallet</div>
                <div className="flex flex-wrap items-center justify-between">
                    <p className="text-gray-600 text-sm">{connectedWalletAddress}</p>
                    <a href="#" onClick={disconnectWallet} className="text-xs text-purple-500 underline hover:text-purple-400">Disconnect</a>
                </div>
            </div>
        );
    } else {
        return (
            <button
                className="rounded bg-blue-500 px-4 py-2 text-white font-bold border border-blue-700 hover:bg-blue-600"
                onClick={connectWallet}
            >
                Connect Wallet
            </button>
        );
    }
};

export default Wallet;