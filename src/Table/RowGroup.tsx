import styles from "./Tables.module.scss";

import React, { ReactNode } from "react";
import { CommonProps } from "@src/interface";

interface RowGroupInterface extends CommonProps {
  children?: ReactNode | ReactNode[] | false;
  isOpen?: boolean;
}

const RowGroup = ({ children, isOpen }: RowGroupInterface) => {
  return (
    <div
      className={`${styles.rowGroup} ${!isOpen ? styles.rowGroupClosed : ""}`}
    >
      {children}
    </div>
  );
};

export default RowGroup;
