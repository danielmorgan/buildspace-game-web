import {ethers} from 'ethers';
import {useState, useEffect} from 'react';
import MyEpicGame from '../Contracts/MyEpicGame.json';

export default function useGameContract() {
    const [gameContract, setGameContract] = useState(null);

    useEffect(() => {
        if (!window.ethereum) {
            console.warn('window.ethereum not available');
            return;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setGameContract(new ethers.Contract(
            process.env.REACT_APP_CONTRACT_ADDRESS,
            MyEpicGame.abi,
            signer
        ));
    }, []);

    return [gameContract];
}