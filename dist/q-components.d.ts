import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { MouseEvent as MouseEvent_2 } from 'react';
import { ReactNode } from 'react';

export declare const HeaderCell: ({ children, className, sortKey, centered, noSort, }: RowCellInterface_2) => default_2.JSX.Element;

export declare const Row: ({ children, handleClick, header, secondary }: RowInterface) => default_2.JSX.Element;

export declare const RowCell: ({ children, className, centered }: RowCellInterface) => default_2.JSX.Element;

declare interface RowCellInterface {
    children?: JSX.Element | JSX.Element[] | false;
    className?: string;
    centered?: boolean;
}

declare interface RowCellInterface_2 {
    children?: JSX.Element | JSX.Element[] | false;
    sortKey?: string;
    className?: string;
    centered?: boolean;
    noSort?: boolean;
}

export declare const RowGroup: ({ children, isOpen }: RowGroupInterface) => default_2.JSX.Element;

declare interface RowGroupInterface {
    children?: JSX.Element | JSX.Element[] | false;
    isOpen?: boolean;
}

declare interface RowInterface {
    children?: JSX.Element | JSX.Element[] | false;
    handleClick?: (e: MouseEvent_2<HTMLDivElement>) => void;
    header?: boolean;
    secondary?: boolean;
}

export declare const Table: ({ children, style, size, defaultKey, }: TableInterface) => default_2.JSX.Element;

export declare const TableBody: ({ children, propKey, }: {
    children?: JSX.Element | JSX.Element[] | false;
    propKey?: string;
}) => default_2.JSX.Element;

declare interface TableInterface {
    children?: ReactNode | ReactNode[] | false;
    style?: CSSProperties;
    size?: {
        min: string;
        max: string;
    }[];
    defaultKey?: string;
}

export { }
