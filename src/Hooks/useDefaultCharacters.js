import {useState, useEffect} from 'react';
import useGameContract from './useGameContract';

export default () => {
    const [gameContract] = useGameContract();
    const [defaultCharacters, setDefaultCharacters] = useState([]);

    useEffect(async () => {
        if (!gameContract) return;
        console.log('Getting default characters');
        const defaultCharacters = await gameContract.getAllDefaultCharacters();
        console.log(defaultCharacters);
        setDefaultCharacters(defaultCharacters);
    }, [gameContract]);

    return [defaultCharacters];
}
