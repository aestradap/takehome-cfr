import Chip from '@mui/material/Chip';
import styles from './chip.module.css';
import React from "react";

interface ChipsDemoProps{
    label: string;
    primary: string;
    secundary: string;
}
export default function ChipsDemo({label, primary, secundary}:ChipsDemoProps) {
    return (
        <Chip className={styles.mychip}
            label={label}
            size="medium"
            variant="filled"
              sx={{backgroundColor: secundary,
                  border: `2px solid ${primary}`,
                  color: primary
              }}
        />
    );
}