import {useState, useEffect} from 'react';

export default function useWallet() {
    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        setCurrentAccount(accounts[0]);
    }

    const disconnectWallet = async () => {
        setCurrentAccount(null);
    }

    return [currentAccount, connectWallet, disconnectWallet];
}