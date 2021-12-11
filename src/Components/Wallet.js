import {useContext} from 'react';
import {WalletContext} from '../Providers/Wallet';

const Wallet = () => {
    const { currentAccount, connectWallet }  = useContext(WalletContext);

    if (currentAccount) {
        return (
            <div>
                <div className="py-1 text-lg font-bold text-gray-700">Connected</div>
                <div className="py-1 border-t border-gray-200 text-gray-600">{currentAccount}</div>
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