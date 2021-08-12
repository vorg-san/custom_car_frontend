import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps {
    type?: string;
    onClick?: () => void;
    className?: string;
    style?: CSSProperties;
    children: JSX.Element | ReactNode | string;
    id?: HTMLAttributes<string>['id'];
    height?: string | number;
    width?: string | number;
}