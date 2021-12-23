import useCharacter from "../Hooks/useCharacter";
import Character from "./Character";

const YourCharacter = () => {
    const {character, tokenId} = useCharacter();
    if (!character) return (<div>Loading character&hellip;</div>);

    return (
        <Character
            tokenId={tokenId}
            name={character.name}
            imageURI={character.imageURI}
            dexNumber={character.dexNumber}
            hp={character.hp}
            maxHp={character.maxHp}
            attackDamage={character.attackDamage}
        />
    );
};

export default YourCharacter;