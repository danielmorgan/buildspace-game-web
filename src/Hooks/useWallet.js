import {useEffect, useState} from 'react';

export default function useWallet() {
    const [connectedWalletAddress, setConnectedWalletAddress] = useState(null);

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        setConnectedWalletAddress(accounts[0]);
    }

    const disconnectWallet = async () => {
        setConnectedWalletAddress(null);
    }

    useEffect(connectWallet, []);

    return [connectedWalletAddress, connectWallet, disconnectWallet];
}