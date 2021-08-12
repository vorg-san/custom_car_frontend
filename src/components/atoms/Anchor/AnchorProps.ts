import { CSSProperties, ReactNode } from "react";

export interface AnchorProps {
    href?: string;
    openInNewTab?: boolean;
    onClick?: () => void;
    weight?: string;
    className?: string;
    style?: CSSProperties;
    primary?: boolean;
    tag?: string;
    color?: string;
    children: JSX.Element | ReactNode | string;
}