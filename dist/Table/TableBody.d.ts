import { ReactNode } from 'react';
import { CommonProps } from '../interface';
interface TableBodyInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
}
declare const TableBody: ({ children, ...restProps }: TableBodyInterface) => import("react/jsx-runtime").JSX.Element;
export default TableBody;
//# sourceMappingURL=TableBody.d.ts.map