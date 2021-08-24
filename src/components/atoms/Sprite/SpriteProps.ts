import { CSSProperties, HTMLAttributes } from "react";

export interface SpriteProps {
    width: string | number;
    height: string | number;
    id: string;
    onClick?: () => void;
    style?: CSSProperties;
    className?: string;
    elementId?: HTMLAttributes<string>['id']
}