import {createContext} from 'react';
import useWallet from '../Hooks/useWallet';

export const WalletContext = createContext();

export const WalletProvider = ({children}) => {
    const [connectedWalletAddress, connectWallet, disconnectWallet] = useWallet();

    const context = {
        connectedWalletAddress,
        connectWallet,
        disconnectWallet,
        isConnected: !!connectedWalletAddress,
    };

    return <WalletContext.Provider value={context}>{children}</WalletContext.Provider>
}
