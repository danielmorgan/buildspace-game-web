import {useState, useEffect} from 'react';

export default function useWallet() {
    const [currentAccount, setCurrentAccount] = useState(null);

    useEffect(async () => {
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
    });

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        setCurrentAccount(accounts[0]);
    }

    return [currentAccount, connectWallet];
}