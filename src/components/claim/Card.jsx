import React from 'react';

const Card = ({ image, title, nftName, price, isSelected, onSelect }) => {
    return (
        <article 
            className={`overflow-hidden rounded-[15px] shadow-sm transition hover:shadow-lg cursor-pointer w-full max-w-[280px] ${
                isSelected ? 'border-2 border-[#C68F00]' : 'border-2 border-transparent'
            }`}
            onClick={onSelect}
        >
            <div className="w-full h-[280px] bg-black flex items-center justify-center overflow-hidden">
                <img
                    alt={nftName || title}
                    src={image}
                    className="object-contain w-full h-full"
                />
            </div>

            <div className="bg-[#3B3B3B] p-4 sm:p-6 w-full">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-sm/relaxed text-white font-bold">
                        {nftName || "NFT"}
                    </p>
                    <p className="text-sm/relaxed text-white font-bold">
                        {title}
                    </p>
                </div>
                <p className="text-sm/relaxed mb-[-8px] justify-start flex text-gray-500 font-bold">Price</p>
                <p className="mt-2 justify-start flex line-clamp-3 text-[12px] text-white">
                    {price} ETH
                </p>
            </div>
        </article>
    );
};

export default Card;