import Chip from '@mui/material/Chip';
import styles from './chip.module.css';
import React from "react";
import {SvgIconProps} from "@mui/material";

export default function ChipsDemo() {
    return (
        <Chip className={styles.mychip}
            label="Stock"
            color='#E8F5E9'
            size="medium"
            variant="filled"
        />
    );
}