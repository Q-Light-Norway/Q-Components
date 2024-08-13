import { ReactNode } from 'react';
import { CommonProps } from '../interface';
interface RowCellInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    centered?: boolean;
}
declare const RowCell: ({ children, className, centered, ...restProps }: RowCellInterface) => import("react/jsx-runtime").JSX.Element;
export default RowCell;
//# sourceMappingURL=RowCell.d.ts.map