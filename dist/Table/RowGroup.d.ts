import { ReactNode } from 'react';
import { CommonProps } from '../interface';
interface RowGroupInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    isOpen?: boolean;
}
declare const RowGroup: ({ children, isOpen, ...restProps }: RowGroupInterface) => import("react/jsx-runtime").JSX.Element;
export default RowGroup;
//# sourceMappingURL=RowGroup.d.ts.map