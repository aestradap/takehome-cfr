import React from "react";
import Chip from '@mui/material/Chip';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleUp';
import styles from './chipChange.module.css';

interface ChipsChangeProps {
    label: string;
    isPositive?: boolean;
    icon?: React.ReactElement;
}

export default function ChipsChange({
                                        label = label,
                                        isPositive = true,
                                        icon = isPositive ? (
                                                <ArrowCircleUpIcon sx={{ display:'flex',
                                                    justifyContent: 'center',
                                                    color: '#4CAF50 !important' }} />
                                            ) : (
                                                <ArrowCircleDownIcon sx={{ color: '#D32F2F !important' }} />
                                            ),
                                    }: ChipsChangeProps) {

    return <>
        <Chip className={styles.mychipChange}
              icon={icon}
              label={label}
              size="medium"
              variant="filled"
              sx={{
                  border: `2px solid ${isPositive ? '#4CAF50' : '#D32F2F'}`,
                  backgroundColor: isPositive ? '#E8F5E9' : '#FEEBEE',
                  color: isPositive ? '#4CAF50' : '#D32F2F'
              }}
        />
    </>
}