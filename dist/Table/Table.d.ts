import { ReactNode } from 'react';
import { CommonProps } from '../interface';
interface TableInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    size?: {
        min: string;
        max: string;
    }[];
    defaultKey?: string;
}
export declare enum SortDirections {
    ASC = "asc",
    DESC = "desc"
}
interface SortState {
    key?: string;
    direction: SortDirections;
}
interface TableContextInterface {
    sort: SortState;
    setSort: (sort: SortState) => void;
    setSortKey: (key?: string) => void;
    toggleSort: () => void;
}
export declare const TableContext: import('react').Context<TableContextInterface>;
declare const Table: ({ children, style, size, defaultKey, ...restProps }: TableInterface) => import("react/jsx-runtime").JSX.Element;
export default Table;
//# sourceMappingURL=Table.d.ts.map