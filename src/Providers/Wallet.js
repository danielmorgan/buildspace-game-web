import {createContext} from 'react';
import useWallet from '../Hooks/useWallet';

export const WalletContext = createContext();

export const WalletProvider = ({children}) => {
    const [currentAccount, connectWallet, disconnectWallet] = useWallet();

    const context = {
        currentAccount,
        connectWallet,
        disconnectWallet,
        isConnected: !!currentAccount,
    };

    return <WalletContext.Provider value={context}>{children}</WalletContext.Provider>
}
