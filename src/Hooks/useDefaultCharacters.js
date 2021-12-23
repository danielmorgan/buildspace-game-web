import {useState, useEffect} from 'react';
import useGameContract from './useGameContract';

export default function useDefaultCharacters() {
    const [gameContract] = useGameContract();
    const [defaultCharacters, setDefaultCharacters] = useState([]);

    useEffect(async () => {
        if (!gameContract) return;
        const defaultCharacters = await gameContract.getAllDefaultCharacters();
        setDefaultCharacters(defaultCharacters);
    }, [gameContract]);

    return [defaultCharacters];
}
