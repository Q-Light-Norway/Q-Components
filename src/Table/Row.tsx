import styles from "./Tables.module.scss";

import React, { MouseEvent } from "react";

interface RowInterface {
  children?: JSX.Element | JSX.Element[] | false;
  handleClick?: (e: MouseEvent<HTMLDivElement>) => void;
  header?: boolean;
  secondary?: boolean;
}

const Row = ({ children, handleClick, header, secondary }: RowInterface) => {
  const getClassName = () => {
    return header && !secondary
      ? styles.headerRow
      : header && secondary
        ? styles.secondaryHeader
        : secondary
          ? styles.secondaryRow
          : styles.row;
  };

  if (header) {
    return (
      <thead className={styles.tableHead} onClick={handleClick}>
        <tr className={getClassName()}>{children}</tr>
      </thead>
    );
  }

  return (
    <tr className={getClassName()} onClick={handleClick}>
      {children}
    </tr>
  );
};

export default Row;
