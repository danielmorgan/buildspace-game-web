import useDefaultCharacters from "../Hooks/useDefaultCharacters";
import useGameContract from "../Hooks/useGameContract";

const SelectCharacter = () => {
    const [defaultCharacters] = useDefaultCharacters();
    const [gameContract] = useGameContract();

    const mintCharacter = (characterIndex) => async () => {
        if (!gameContract) return;
        await gameContract.mintCharacterNFT(characterIndex);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700">Choose your starter</h2>
            {defaultCharacters.length > 0 &&
                <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:flex-wrap sm:space-x-4 sm:space-y-0">
                    {defaultCharacters.map((character, index) => (
                        <button
                            type="button"
                            className="flex-1 flex flex-col justify-end rounded overflow-hidden text-left shadow hover:shadow-md hover:-translate-y-1 transition-all duration-150 ease-in-out"
                            onClick={mintCharacter(index)}
                            key={index}
                        >
                            <img src={character.imageURI} alt={character.name} className="hidden sm:block p-3"/>
                            <div className="w-full py-3 px-4 bg-purple-50">
                                <h3 className="font-medium text-gray-600">I choose you, {character.name}</h3>
                            </div>
                        </button>
                    ))}
                </div>
            }
        </div>
    )
};

export default SelectCharacter;