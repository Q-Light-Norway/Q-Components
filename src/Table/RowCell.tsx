import styles from "./Tables.module.scss";

import React from "react";

interface RowCellInterface {
  children?: JSX.Element | JSX.Element[] | false;
  className?: string;
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
