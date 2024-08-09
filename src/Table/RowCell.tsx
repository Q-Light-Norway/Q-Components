import styles from "./Tables.module.scss";

import React, { ReactNode } from "react";
import { CommonProps } from "@src/interface";

interface RowCellInterface extends CommonProps {
  children?: ReactNode | ReactNode[] | false;
  centered?: boolean;
}

const RowCell = ({ children, className, centered }: RowCellInterface) => {
  return (
    <td
      className={`${styles.rowCell} ${className ? className : ""} ${centered ? "centered" : ""}`}
    >
      {children}
    </td>
  );
};

export default RowCell;
