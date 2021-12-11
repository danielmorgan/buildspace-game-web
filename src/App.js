import {useEffect, useState} from 'react';

const App = () => {
    const checkWalletConnected = async () => {
        if (!window.ethereum) {
            console.log('Make sure you have metamask');
            return;
        }
        const accounts = await window.ethereum.request({method: 'eth_accounts'});
        if (accounts.length <= 0) {
            console.log('No authorized accounts found');
            return;
        }
        setCurrentAccount(accounts[0]);
    };

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        setCurrentAccount(accounts[0]);
    }


    useEffect(checkWalletConnected);
    const [currentAccount, setCurrentAccount] = useState(null);


    const connectWalletButton = (
        <button
            className="rounded bg-blue-500 px-4 py-2 text-white font-bold border border-blue-700 hover:bg-blue-600"
            onClick={connectWallet}
        >
            Connect Wallet
        </button>
    );

    const walletStatus = (
        <div>
            <div className="py-1 text-lg font-bold text-gray-700">Connected</div>
            <div className="py-1 border-t border-gray-200 text-gray-600">{currentAccount}</div>
        </div>
    );

    return (
        <div className="w-1/2 mt-8 mx-auto rounded shadow-md bg-white overflow-hidden">
            <div className="relative p-4">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500"/>
                <h1 className="relative z-10 text-5xl text-center font-bold m-0 p-6 uppercase text-gray-500 mix-blend-color-dodge">
                    Buildspace Game
                </h1>
            </div>

            <div className="p-4">
                {currentAccount
                    ? walletStatus
                    : connectWalletButton
                }
            </div>
        </div>
    );
}

export default App;
