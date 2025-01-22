'use client';
import * as React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import ListItem from '@mui/joy/ListItem';
import DigitalAsset from "@/components/DigitalAssets/DigitalAsset";
import styles from './listStackAssets.module.css';
import Box from "@mui/joy/Box";

export default function ListStackAssets() {

    const assets = useSelector((state: RootState) => state.assets.assets);
    console.log(assets);
    return <>
        <Box className={styles.xdisplacement}>
            {assets.map((item, index) => (
                <ListItem key={item.idName}
                          className={styles.itemsContainer}
                >
                    <DigitalAsset asset={item}/>
                </ListItem>
            ))}
        </Box>
    </>
}