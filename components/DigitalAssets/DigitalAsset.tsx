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


export default function DigitalAsset() {
    return <div className={styles.group}>
        <Box className={styles.avatarBox}>
            <Avatar className={styles.avatartype}>
                <Chip/>
            </Avatar>
        </Box>
        <div className={styles.card}>
            <div className={styles.webButton}>
                <IconButtonDemo icon={LanguageIcon} link="/custom-page"/>
            </div>
            <div className={styles.stats}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid size="grow">
                            <Typography className={styles.item} variant="subtitle1" component="h6">
                                <b>$137.71</b> usd
                            </Typography>
                            <Typography className={styles.item} variant="subtitle1" component="h6">
                                <b>Price</b>
                            </Typography>
                        </Grid>
                        <Grid size={1}/>
                        <Grid size="grow">
                            <Typography className={styles.backItem} variant="subtitle1" component="h6">
                                <ChipsChange/>
                            </Typography>
                            <Typography className={styles.backItem} variant="subtitle1" component="h6">
                                <b>Change 24hrs</b>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid size="grow">
                            <Typography className={styles.item} variant="subtitle1" component="h6">
                                <b>$3.31 T</b>
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

        </div>
        <div className={styles.logostock}>
            <div className={styles.placeholder}>
                <Chip/>
                <Typography className={styles.name} variant="h6" component="h6">
                    Nvidia
                </Typography>
            </div>
            <div className={styles.frame}>
                <IconButtonDemo icon={BookmarkBorderIcon} link="/custom-page"/>
            </div>
        </div>
    </div>
};