import { CSSProperties, ReactNode } from "react";

export interface LabelProps {
    tag?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'default';
    weight?: 'bold' | 'normal';
    style?: CSSProperties;
    theme?: string;
    onClick?: () => void;
    className?: string;
    children: ReactNode;
}