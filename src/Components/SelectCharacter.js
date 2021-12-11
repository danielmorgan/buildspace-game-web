import useDefaultCharacters from "../Hooks/useDefaultCharacters";

const SelectCharacter = () => {
    const [defaultCharacters] = useDefaultCharacters();

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700">Choose your character</h2>
            { defaultCharacters.length > 0 && <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:flex-wrap sm:space-x-4 sm:space-y-0">
                {defaultCharacters.map((character, index) => (
                    <button
                        type="button"
                        onClick={() => console.log(index)}
                        className="flex-1 rounded overflow-hidden text-left shadow hover:shadow-md hover:-translate-y-1 transition-all duration-150 ease-in-out"
                        key={index}
                    >
                        <img src={character.imageURI} alt={character.name} className="hidden sm:block"/>
                        <div className="py-3 px-4 bg-purple-50">
                            <h3 className="font-medium text-gray-600">Mint {character.name}</h3>
                        </div>
                    </button>
                ))}
            </div>}
        </div>
    )
};

export default SelectCharacter;