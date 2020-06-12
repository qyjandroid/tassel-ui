export interface ButtonProps {
    disabled?: boolean;
    className: string;
    statId?: number;
    clickId?: string;
    style?: any;
    onClick: Function;
    statMap?: any;
    children?: any;
    onMouseLeave?: any;
    onMouseEnter?: any;
    delayTime?: number;
}