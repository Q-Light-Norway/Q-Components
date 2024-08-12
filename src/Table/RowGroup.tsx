import styles from "./Tables.module.scss";

import { ReactNode } from "react";
import { CommonProps } from "@src/interface";

interface RowGroupInterface extends CommonProps {
  children?: ReactNode | ReactNode[] | false;
  isOpen?: boolean;
}

const RowGroup = ({ children, isOpen, ...restProps }: RowGroupInterface) => {
  return (
    <div
      className={`${styles.rowGroup} ${!isOpen ? styles.rowGroupClosed : ""}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default RowGroup;
