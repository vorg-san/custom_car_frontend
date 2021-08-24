import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface TitleProps {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    style?: CSSProperties;
    className?: string;
    id?: HTMLAttributes<string>['id'];
    children: ReactNode;
    racingFont?: boolean;
}