"use client";

import styles from "./Tables.module.scss";

import { ReactNode, useContext, useEffect, useState } from "react";
import { SortDirections, TableContext } from "./Table";
import { CommonProps } from "@src/interface";

interface TableBodyInterface extends CommonProps {
  children?: ReactNode | ReactNode[] | false;
  propKey?: string;
}

const TableBody = ({ children, propKey, ...restProps }: TableBodyInterface) => {
  const { sort } = useContext(TableContext);
  const [sortedChildren, setSortedChildren] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (!children || !Array.isArray(children) || !propKey || !sort || !sort.key)
      return;

    const sorted = children.sort((a, b) => {
      if (sort.direction === SortDirections.ASC) {
        // @ts-ignore
        return a.props[propKey][sort.key] > b.props[propKey][sort.key] ? 1 : -1;
      }
      // @ts-ignore
      return a.props[propKey][sort.key] < b.props[propKey][sort.key] ? 1 : -1;
    });

    setSortedChildren([...sorted]);
  }, [sort, children]);

  if (!children || !Array.isArray(children) || !propKey) {
    return (
      <tbody className={styles.tableBody} {...restProps}>
        {children}
      </tbody>
    );
  }

  return (
    <tbody className={styles.tableBody} {...restProps}>
      {sortedChildren}
    </tbody>
  );
};

export default TableBody;
