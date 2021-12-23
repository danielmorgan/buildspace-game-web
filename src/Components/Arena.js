import React, { useEffect, useState } from 'react';
import YourCharacter from "./YourCharacter";
import Character from "./Character";
import useGameContract from "../Hooks/useGameContract";
import transformCharacterData from "../Utils/transformCharacterData";

const Arena = () => {
    const [gameContract] = useGameContract();
    const [bigBoss, setBigBoss] = useState(null);

    useEffect(async () => {
        if (!gameContract) return;
        const bigBoss = await gameContract.getBigBoss();
        setBigBoss(transformCharacterData(bigBoss));
    }, [gameContract]);

    if (!bigBoss) return (<div>Loading big boss...</div>);

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
            <YourCharacter/>
        </div>
    );
};

export default Arena;