import {useEffect, useState} from 'react';

export default function useWallet() {
    const [connectedWalletAddress, setconnectedWalletAddress] = useState(null);

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        setconnectedWalletAddress(accounts[0]);
    }

    const disconnectWallet = async () => {
        setconnectedWalletAddress(null);
    }

    useEffect(connectWallet, []);

    return [connectedWalletAddress, connectWallet, disconnectWallet];
}