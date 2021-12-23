import {useState, useEffect} from 'react';
import useGameContract from './useGameContract';
import useWallet from "./useWallet";
import transformCharacterData from "../Utils/transformCharacterData";

export default function useCharacter() {
    const [gameContract] = useGameContract();
    const [connectedWalletAddress] = useWallet();

    const [character, setCharacter] = useState(null);
    const [hasCharacter, setHasCharacter] = useState(false);
    const [tokenId, setTokenId] = useState(0);

    const getUsersCharacter = async () => {
        if (!gameContract) return;
        const character = await gameContract.checkIfUserHasNFT();
        setCharacter(transformCharacterData(character));
    };

    const getTokenId = async () => {
        if (!connectedWalletAddress) return;
        const tokenId = await gameContract.holders(connectedWalletAddress);
        setTokenId(tokenId.toNumber());
    };

    const onCharacterNFTMinted = async(sender, tokenId, characterIndex) => {
        setTokenId(tokenId.toNumber());
        await getUsersCharacter();
    };

    useEffect(() => {
        if (!gameContract) return;
        gameContract.on('CharacterNFTMinted', onCharacterNFTMinted);
        return () => {
            if (!gameContract) return;
            gameContract.off('CharacterNFTMinted', onCharacterNFTMinted);
        }
    }, [gameContract]);

    useEffect(getUsersCharacter, [gameContract, connectedWalletAddress]);
    useEffect(getTokenId, [connectedWalletAddress]);

    useEffect(() => {
        if (!character) return;
        setHasCharacter(!!character?.name);
    });

    return {character, hasCharacter, tokenId};
}
