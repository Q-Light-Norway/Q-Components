import { ReactNode } from 'react';
import { CommonProps } from '../interface';
interface RowCellInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    sortKey?: string;
    centered?: boolean;
    noSort?: boolean;
}
declare const RowCell: ({ children, className, overrideClassName, sortKey, centered, ...restProps }: RowCellInterface) => import("react/jsx-runtime").JSX.Element;
export default RowCell;
//# sourceMappingURL=HeaderCell.d.ts.map