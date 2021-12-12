const YourCharacter = ({ character, tokenId }) => {
    return (
        <div className="mt-4 flex flex-col sm:flex-row rounded overflow-hidden text-left shadow">
            <img src={character.imageURI} alt={character.name} className="flex-shrink-1 p-3 mx-auto"/>
            <div className="flex-1 flex flex-col justify-between bg-purple-50 sm:border-l">
                <div className="">
                    <div className="p-4 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
                        <h3 className="text-xl font-bold text-white drop-shadow">{character.name} - #{tokenId}</h3>
                    </div>
                    <dl className="p-2">
                        <div className="bg-white p-2 grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium">Dex #</dt>
                            <dd className="col-span-2 text-sm">{character.dexNumber}</dd>
                        </div>
                        <div className="p-2 grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium">HP</dt>
                            <dd className="col-span-2 text-sm">{character.hp} / {character.maxHp}</dd>
                        </div>
                        <div className="bg-white border-t p-2 grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium">ATK</dt>
                            <dd className="col-span-2 text-sm">{character.attackDamage}</dd>
                        </div>
                    </dl>
                </div>
                <div className="p-4">
                    <a href={`https://testnets.opensea.io/assets//${tokenId}`} className="text-purple-500 text-sm underline hover:no-underline">View on OpenSea</a>
                </div>
            </div>
        </div>
    );
};

export default YourCharacter;