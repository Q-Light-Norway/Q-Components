import { MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../interface';
interface RowInterface extends CommonProps {
    children?: ReactNode | ReactNode[] | false;
    handleClick?: (e: MouseEvent<HTMLDivElement>) => void;
    header?: boolean;
    secondary?: boolean;
    href?: string;
    sortObject?: Record<string, any>;
}
declare const Row: ({ children, handleClick, header, secondary, sortObject, ...restProps }: RowInterface) => import("react/jsx-runtime").JSX.Element;
export default Row;
//# sourceMappingURL=Row.d.ts.map