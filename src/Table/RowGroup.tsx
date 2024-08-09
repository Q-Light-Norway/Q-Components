import styles from "./Tables.module.scss";

import React from "react";

interface RowGroupInterface {
  children?: JSX.Element | JSX.Element[] | false;
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
