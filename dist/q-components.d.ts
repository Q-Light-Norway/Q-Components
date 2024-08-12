import { CSSProperties } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { MouseEvent as MouseEvent_2 } from 'react';
import { ReactNode } from 'react';

declare interface CommonProps {
    className?: string;
    overrideClassName?: string;
    style?: CSSProperties;
}

export declare const HeaderCell: ({ children, className, overrideClassName, sortKey, centered, noSort, ...restProps }: RowCellInterface_2) => JSX_2.Element;

export declare const Row: ({ children, handleClick, header, secondary }: RowInterface) => JSX_2.Element;

export declare const RowCell: ({ children, className, centered }: RowCellInterface) => JSX_2.Element;

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

export declare const RowGroup: ({ children, isOpen }: RowGroupInterface) => JSX_2.Element;

declare interface RowGroupInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    isOpen?: boolean;
}

declare interface RowInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    handleClick?: (e: MouseEvent_2<HTMLDivElement>) => void;
    header?: boolean;
    secondary?: boolean;
}

export declare const Table: ({ children, style, size, defaultKey, }: TableInterface) => JSX_2.Element;

export declare const TableBody: ({ children, propKey }: TableBodyInterface) => JSX_2.Element;

declare interface TableBodyInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    propKey?: string;
}

declare interface TableInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    size?: {
        min: string;
        max: string;
    }[];
    defaultKey?: string;
}

export { }
