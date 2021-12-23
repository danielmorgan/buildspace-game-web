const Character = ({name, imageURI, tokenId, dexNumber, hp, maxHp, attackDamage, flipped}) => {
    return (
        <div
            className={(flipped ? `sm:flex-row-reverse` : 'sm:flex-row') + ` mt-4 flex flex-col rounded overflow-hidden text-left shadow`}
        >
            <img src={imageURI} alt={name} className="flex-shrink-1 p-3 mx-auto"/>
            <div className="flex-1 flex flex-col justify-between bg-purple-50 sm:border-l">
                <div className="">
                    <div className="p-4 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
                        <h3 className="text-xl font-bold text-white drop-shadow">
                            {name}{tokenId && ` - #${tokenId}`}
                        </h3>
                    </div>
                    <dl className="p-2">
                        <div className="bg-white p-2 grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium">Dex #</dt>
                            <dd className="col-span-2 text-sm">{dexNumber}</dd>
                        </div>
                        <div className="pt-2 px-2 border-t grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium">HP</dt>
                            <dd className="col-span-2 text-sm">{hp} / {maxHp}</dd>
                        </div>
                        <div className="p-1 pb-2">
                            <dd className="col-span-3 text-sm">
                                <div className="relative shadow-lg shadow-inner rounded-full bg-white h-4 overflow-hidden">
                                    <div className="bg-gradient-to-b from-cyan-300 to-green-500 h-full absolute inset-0 transition-all duration-1000 ease-out delay-500" style={{
                                        width: `${(hp/maxHp)*100}%`
                                    }}/>
                                </div>
                            </dd>
                        </div>
                        <div className="bg-white border-t p-2 grid grid-cols-3 gap-4">
                            <dt className="text-sm font-medium">ATK</dt>
                            <dd className="col-span-2 text-sm">{attackDamage}</dd>
                        </div>
                    </dl>
                </div>

                {tokenId && (
                    <div className="p-4">
                        <a
                            href={`https://testnets.opensea.io/assets/${process.env.REACT_APP_CONTRACT_ADDRESS}/${tokenId}`}
                           className="text-purple-500 text-sm underline hover:no-underline"
                        >
                            View on OpenSea
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Character;