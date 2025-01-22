"use client";

import React from "react";
import styles from './digitalAssets.module.css';
import Avatar from '@mui/joy/Avatar';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import {Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Chip from '@/components/Chip/Chip';
import IconButtonDemo from "@/components/IconButton/IconButton";
import ChipsChange from "@/components/ChipChange/ChipChange";
import {useAppDispatch} from '@/app/redux/store';
import {viewReport} from '@/app/redux/slices/assetsSlice';


interface DigitalAssetProps {
    asset: {
        keyName: string,
        idName: string;
        nominalValue: string;
        coinType: string;
        totalValue: string;
        change24hr: string;
        primaryColor: string;
        secundaryColor: string,
        imgUrl: string,
    };
}

export default function DigitalAsset({asset}: DigitalAssetProps) {

    const {
        keyName, idName, nominalValue,
        coinType, totalValue, change24hr,
        primaryColor, secundaryColor, imgUrl
    } = asset;

    const changeValue = change24hr || '';
    const valueList = changeValue.split('');
    const increment = valueList[0] === "+";
    const incrementValue = valueList.length > 1 ? changeValue.slice(1) : '0';

    const dispatch = useAppDispatch();
    const handleViewReport = () => {
        // dispatch(viewReport(idName));
    };

    return <Box className={styles.group} >
        <Box className={styles.avatarBox}>
            <Avatar className={styles.avatartype} sx={{backgroundColor: primaryColor}}>
                <Chip label={keyName} primary={primaryColor} secundary={secundaryColor}/>
            </Avatar>
        </Box>
        <Box className={styles.card} sx={{border: `3px solid ${primaryColor}`}}>
            <div className={styles.webButton}>
                <IconButtonDemo icon={LanguageIcon} link="/custom-page"/>
            </div>
            <div className={styles.stats}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid size="grow">
                            <Typography className={styles.item} variant="subtitle1" component="h6">
                                <b>{nominalValue}</b>
                            </Typography>
                            <Typography className={styles.item} variant="subtitle1" component="h6">
                                <b>Price</b>
                            </Typography>
                        </Grid>
                        <Grid size={1}/>
                        <Grid size="grow">
                            {keyName !== 'NFT' ? <>
                                <Typography className={styles.backItem} variant="subtitle1" component="h6">
                                    <ChipsChange label={incrementValue} isPositive={increment}/>
                                </Typography>
                                <Typography className={styles.backItem} variant="subtitle1" component="h6">
                                    <b>Change 24hrs</b>
                                </Typography>
                            </> : <>
                                <Typography className={styles.backItem} variant="subtitle1" component="h6">
                                    <b>{coinType}</b>
                                </Typography>
                                <Typography className={styles.backItem} variant="subtitle1" component="h6">
                                    <b>Crypto chain</b>
                                </Typography>
                            </>
                            }
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid size="grow">
                            <Typography className={styles.item} variant="subtitle1" component="h6">
                                <b>{totalValue}</b>
                            </Typography>
                            <Typography className={styles.item} variant="subtitle1" component="h6">
                                <b>Market cap</b>
                            </Typography>
                        </Grid>
                        <Grid size={1}/>
                        <Grid size="grow" className={styles.itemBtn}>
                            <Button size="lg">View report</Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Box>
        <Box className={styles.logostock}
             sx={{
                 border: `3px solid ${primaryColor} !important`,
                 backgroundColor: `${secundaryColor} !important`
             }}>
            <Box className={styles.placeholder} sx={{backgroundImage: `url(${imgUrl})`}}>
                <Chip label={keyName} primary={primaryColor} secundary={secundaryColor}/>
                <Typography className={styles.name} variant="h6" component="h6">
                    {idName}
                </Typography>
            </Box>
            <div className={styles.frame}>
                <IconButtonDemo
                    onClik={handleViewReport}
                    icon={BookmarkBorderIcon}
                    link="/custom-page"
                />
            </div>
        </Box>
    </Box>
};