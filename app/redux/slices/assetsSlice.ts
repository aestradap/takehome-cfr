import {createSlice} from "@reduxjs/toolkit";

interface Asset {
    keyName: string;
    idName: string;
    nominalValue: string;
    coinType: string;
    totalValue: string;
    change24hr: string;
};

interface InitialState {
    assets: Asset[];
};

const initialState: InitialState = {
    assets: [
        {
            keyName: 'stock',
            idName: 'Nvidia',
            nominalValue: '$137.71 USD',
            coinType: 'USD',
            totalValue: '$3.31 T',
            change24hr: '-2.19%'
        }, {
            keyName: 'Stock',
            idName: 'Nvidia',
            nominalValue: '$96,826.97 USD',
            coinType: 'USD',
            totalValue: '$2.0 T',
            change24hr: '+2.19%'
        }, {
            keyName: 'NFT',
            idName: 'Pudgy Penguins',
            nominalValue: '23.12 ETH',
            coinType: 'Ethereum',
            totalValue: '$2.0 T',
            change24hr: 'Crypto chain'
        }
    ]
};

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        viewReport: (state, action) => {
            console.log(state.assets[action.payload]);
        },
        addAsset: (state, action) => {
            state.assets.push(action.payload);
        }
    },
});

export const {viewReport, addAsset} = assetsSlice.actions;
export default assetsSlice.reducer;