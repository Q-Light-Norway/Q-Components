import styles from "./Tables.module.scss";

import { MouseEvent, ReactNode } from "react";
import { CommonProps } from "@src/interface";

interface RowInterface extends CommonProps {
  children?: ReactNode | ReactNode[] | false;
  handleClick?: (e: MouseEvent<HTMLDivElement>) => void;
  header?: boolean;
  secondary?: boolean;
  href?: string;
  sortObject?: any;
}

const Row = ({
  children,
  handleClick,
  header,
  secondary,
  sortObject,
  ...restProps
}: RowInterface) => {
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
      <thead className={styles.tableHead} onClick={handleClick} {...restProps}>
        <tr className={getClassName()}>{children}</tr>
      </thead>
    );
  }

  return (
    <tr className={getClassName()} onClick={handleClick} {...restProps}>
      {children}
    </tr>
  );
};

export default Row;
