import {useState, useEffect, useContext} from 'react';
import useGameContract from './useGameContract';
import {WalletContext} from "../Providers/Wallet";
import useWallet from "./useWallet";

export default function useCharacter() {
    const [gameContract] = useGameContract();
    const [connectedWalletAddress] = useWallet();

    const [character, setCharacter] = useState(null);
    const [hasCharacter, setHasCharacter] = useState(false);
    const [tokenId, setTokenId] = useState(0);

    function transformCharacterData(characterData) {
        return {
            dexNumber: characterData.dexNumber,
            name: characterData.name,
            imageURI: characterData.imageURI,
            hp: characterData.hp.toNumber(),
            maxHp: characterData.maxHp.toNumber(),
            attackDamage: characterData.attackDamage.toNumber(),
        };
    }

    const getUsersCharacter = async () => {
        if (!gameContract) return;
        if (!connectedWalletAddress) return;
        const character = await gameContract.checkIfUserHasNFT();
        setCharacter(transformCharacterData(character));
        const tokenId = await gameContract.holders(connectedWalletAddress);
        setTokenId(tokenId.toNumber());
    };

    useEffect(() => {
        if (!gameContract) return;
        gameContract.on('CharacterNFTMinted', getUsersCharacter);
        return () => {
            if (!gameContract) return;
            gameContract.off('CharacterNFTMinted', getUsersCharacter);
        }
    }, [gameContract, connectedWalletAddress]);

    useEffect(getUsersCharacter, [gameContract]);

    useEffect(() => {
        setHasCharacter(!!character?.name);
    }, [character]);

    return [character, hasCharacter, tokenId];
}
