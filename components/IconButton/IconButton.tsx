import React from 'react'
import IconButton from '@mui/material/IconButton';
import {SvgIconProps} from '@mui/material';
import Link from "next/link";


interface IconButtonDemoProps {
    icon: React.ElementType<SvgIconProps>;
    link?: string;
    color?: "default" | "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    size?: "small" | "medium" | "large";

}

export default function IconButtonDemo({
                                           icon: Icon,
                                           link = "/official-web",
                                           color = "default",
                                           size = "medium",
                                       }: IconButtonDemoProps) {


    const linkUrl = link || "/official-web";

    return <>
        <Link href={linkUrl}>
            <IconButton
                color={color}
                size={size}
            >
                <Icon sx={{color: '#E8F5E9'}}/>
            </IconButton>
        </Link>

    </>
}