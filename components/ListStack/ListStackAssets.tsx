import * as React from 'react';
import styles from './listStackAssets.module.css';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton'
import DigitalAsset from "@/components/DigitalAssets/DigitalAsset";

const data = [
    {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night view',
        description: '4.21M views',
    },
    {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake view',
        description: '4.74M views',
    },
    {
        src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
        title: 'Mountain view',
        description: '3.98M views',
    },
];

export default function ListStackAssets() {
    return (
        <Card variant="outlined" sx={{width: 'auto', p: 0}}>
            <div
                style={{
                    overflowX: 'auto',
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: '16px',
                    padding: '16px',
                }}
            >
                {data.map((item, index) => (
                    <ListItem key={item.title}
                              sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  minWidth: 200,
                                  flexShrink: 0
                              }}
                    >
                        <DigitalAsset/>
                    </ListItem>
                ))}
            </div>
        </Card>
    );
}