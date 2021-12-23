import React, { useEffect, useState } from 'react';
import Character from "./Character";
import useGameContract from "../Hooks/useGameContract";
import transformCharacterData from "../Utils/transformCharacterData";
import useCharacter from "../Hooks/useCharacter";

const Arena = () => {
    const [gameContract] = useGameContract();
    const [bigBoss, setBigBoss] = useState(null);
    const {character, setCharacter, tokenId} = useCharacter();

    useEffect(async () => {
        if (!gameContract) return;
        const bigBoss = await gameContract.getBigBoss();
        setBigBoss(transformCharacterData(bigBoss));
    }, [gameContract]);

    const onAttackCompleted = async (newBossHp, newPlayerHp) => {
        console.log('attackCompleted', newBossHp, newPlayerHp);
        setBigBoss(prevState => ({ ...prevState, hp: newBossHp.toNumber() }));
        setCharacter(prevState => {
            console.log('setCharacter', prevState, newPlayerHp.toNumber());
            return { ...prevState, hp: newPlayerHp.toNumber() };
        });
    };

    useEffect(() => {
        if (!gameContract) return;
        gameContract.on('AttackCompleted', onAttackCompleted);
        return () => {
            if (!gameContract) return;
            gameContract.off('AttackCompleted', onAttackCompleted);
        }
    }, [gameContract]);

    const attack = async () => {
        if (!gameContract) return;
        const res = await gameContract.attackBoss();
        console.log('attacked boss', res);
    };

    if (!bigBoss || !character || !tokenId) return (<div>Loading big boss...</div>);
    return (
        <div>
            <Character
                name={bigBoss.name}
                imageURI={bigBoss.imageURI}
                dexNumber={bigBoss.dexNumber}
                hp={bigBoss.hp}
                maxHp={bigBoss.maxHp}
                attackDamage={bigBoss.attackDamage}
                flipped={true}
            />
            <div className="text-center font-bold text-4xl text-gray-400 my-8 leading-none">VS</div>
            <Character
                attack={attack}
                tokenId={tokenId}
                name={character.name}
                imageURI={character.imageURI}
                dexNumber={character.dexNumber}
                hp={character.hp}
                maxHp={character.maxHp}
                attackDamage={character.attackDamage}
            />
            <button
                className="rounded bg-blue-500 px-4 py-2 text-white font-bold border border-blue-700 hover:bg-blue-600"
                onClick={attack}
            >
                Tackle
            </button>
        </div>
    );
};

export default Arena;