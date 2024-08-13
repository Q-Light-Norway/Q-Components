import { CSSProperties } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { MouseEvent as MouseEvent_2 } from 'react';
import { ReactNode } from 'react';

declare interface CommonProps extends EventProps {
    className?: string;
    overrideClassName?: string;
    style?: CSSProperties;
}

declare interface EventProps {
    onMouseEnter?: (e: MouseEvent_2<HTMLDivElement>) => void;
    onMouseLeave?: (e: MouseEvent_2<HTMLDivElement>) => void;
    onMouseOver?: (e: MouseEvent_2<HTMLDivElement>) => void;
    onMouseOut?: (e: MouseEvent_2<HTMLDivElement>) => void;
    onClick?: (e: MouseEvent_2<HTMLDivElement>) => void;
    onDoubleClick?: (e: MouseEvent_2<HTMLDivElement>) => void;
}

export declare const HeaderCell: ({ children, className, overrideClassName, sortKey, centered, ...restProps }: RowCellInterface_2) => JSX_2.Element;

export declare const Row: ({ children, handleClick, header, secondary, sortObject, ...restProps }: RowInterface) => JSX_2.Element;

export declare const RowCell: ({ children, className, centered, ...restProps }: RowCellInterface) => JSX_2.Element;

declare interface RowCellInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    centered?: boolean;
}

declare interface RowCellInterface_2 extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    sortKey?: string;
    centered?: boolean;
    noSort?: boolean;
}

export declare const RowGroup: ({ children, isOpen, ...restProps }: RowGroupInterface) => JSX_2.Element;

declare interface RowGroupInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    isOpen?: boolean;
}

declare interface RowInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    handleClick?: (e: MouseEvent_2<HTMLDivElement>) => void;
    header?: boolean;
    secondary?: boolean;
    href?: string;
    sortObject?: any;
}

export declare const Table: ({ children, style, size, defaultSortKey, ...restProps }: TableInterface) => JSX_2.Element;

export declare const TableBody: ({ children, ...restProps }: TableBodyInterface) => JSX_2.Element;

declare interface TableBodyInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
}

declare interface TableInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    size?: {
        min: string;
        max: string;
    }[];
    defaultSortKey?: string;
}

export { }
