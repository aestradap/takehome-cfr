import {createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Asset {
    keyName: string;
    idName: string;
    nominalValue: string;
    coinType: string;
    totalValue: string;
    change24hr: string;
    primaryColor: string,
    secundaryColor: string,
    imgUrl: string,
    isFavorite?: boolean;
}

interface InitialState {
    assets: Asset[];
}

const initialState: InitialState = {
    assets: [
        {
            keyName: 'Stock',
            idName: 'Nvidia',
            nominalValue: '$137.71 USD',
            coinType: 'USD',
            totalValue: '$3.31 T',
            change24hr: '-2.19%',
            primaryColor: '#4CAF50',
            secundaryColor: '#E8F5E9',
            imgUrl: 'https://s3-alpha-sig.figma.com/img/89e4/e0e9/61a7f4aabd6881fbf0a8c71177e9f63e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=baEWS95YyyVLKbKaKcdcIUTLzk-OnH7Swkt6Wx1df6eb75aGY3rR3Z4TW4dzE9ysNeDZ3BvrTviku4HplHpjgx1~2qE9X0itXzvE-aqQiOEziM~7dQgHkX45zbkaiSG4qCAyx-ymDdT9mhtF5ki1OC22ZR-iOyTtJSqcWEUG8GsbqGCIh4W9EJVKJgGUCm7nUFNM84YocXpmeDDzduq67HE0ca4VKAgokb0Syq5v7Uex-5XwKaV35iuj-WnP56fxiKvd9r0Vy-5F2PlTuwtzgen-fscnFj7ftFOMWLPAxwG8T93OYBtWHvG8xHLwhsDsP-dN4Aon5aH218UGiosmgQ__',
            isFavorite: false,
        }, {
            keyName: 'Stock',
            idName: 'BitCoin',
            nominalValue: '$96,826.97 USD',
            coinType: 'USD',
            totalValue: '$2.0 T',
            change24hr: '+2.19%',
            primaryColor: '#00B0FF',
            secundaryColor: '#E3F2FD',
            imgUrl: 'https://s3-alpha-sig.figma.com/img/66ba/aa41/e40895e633bf7675b99485b33df5ef99?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O85Ddl3r1twVUYUZ5PFiHjLF88HjKAH6RyskNcCuEvKWVm0SijFkCpOZys--OXlciZl-IrB-~6ivFtliwQn1NhGCHQeEiG-WusMufyei2KbI6cXRsYmm5W-aD~im5Aq2zZ1tsGTjn2nO3xZnEYbbDO35LhyQHnqi7W4uPItusWVTmfNmSs89mf0-M8d8qPnBmEl1PorEHHWSLF5-STQgJWOFtOl5f52yXyva9a8JNzu7CVN9zQn9asDezM973NaECcSeKHbfm70SJlckyD9qR371mfIH39DyBSaeMmtFqMWkCR8W7ytWuMiRMXshGz6FHI2WF~r7YzCCFJK-KRCL5w__',
            isFavorite: false,
        }, {
            keyName: 'NFT',
            idName: 'Pudgy Penguins',
            nominalValue: '23.12 ETH',
            coinType: 'Ethereum',
            totalValue: '$2.0 T',
            change24hr: 'Crypto chain',
            primaryColor: '#F50057',
            secundaryColor: '#FCE4EC',
            imgUrl: 'https://s3-alpha-sig.figma.com/img/3ef5/7485/752c7b2032f7f25b35d5f1d814cbc687?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jyyr-Y9dtqatG8PXXDEclUfqQCNoNeyISeIwEspVegMjqeC8wyVSpaLyJleikEIuphR~f2WzUX7ZEbCYBOXhS-qazqv4Ka5kzR-iveuJevKnRC08slA9aJ1MMhBYN5cBu5WnAwS6YaUpyeQZQMn84a-Guvi0g2xG4sWLdN61Thxxt5iVHC9ECm9ihpHG47yzyrb9KuPp9sspLVEhn2~6DMz7pJoZwHN3PxMtodLYf4uy06c5T7JT9Xrn01dPRjukGQrfgOrMPRw4ms-zci~BRX0NXWAnn1d98gEUkpNZb241MYXzBiiJuJ3wEOr8NYp1N8XK2BL9hac1FEEYY5AfIg__',
            isFavorite: false,
        }
    ]
};

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        viewReport: (state, action: PayloadAction<string>) => {
            const idName = action.payload;
            const asset = state.assets.find(asset => asset.idName === idName);
            if (asset) {
                console.log(asset);
            } else {
                console.error("Asset not found with idName:", idName);
            }
        },
        addAsset: (state, action:  PayloadAction<Asset>) => {
            state.assets.push(action.payload);
        },
        checkAsFavorite: (state, action: PayloadAction<string>) => {
            const myAsset = (asset) => asset.idName === action.payload;
            const assetIndex = state.assets.findIndex(myAsset);
            if (assetIndex !== -1) {
                state.assets[assetIndex].isFavorite = !state.assets[assetIndex].isFavorite;
            }
        }
    },
});

export const { viewReport, addAsset, checkAsFavorite } = assetsSlice.actions;
export default assetsSlice.reducer;