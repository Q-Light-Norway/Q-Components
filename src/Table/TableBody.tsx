import styles from "./Tables.module.scss";

import React, { useContext, useEffect, useState } from "react";
import { SortDirections, TableContext } from "./Table";

const TableBody = ({
  children,
  propKey,
}: {
  children?: JSX.Element | JSX.Element[] | false;
  propKey?: string;
}) => {
  const { sort } = useContext(TableContext);
  const [sortedChildren, setSortedChildren] = useState<JSX.Element[]>([]);

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
    return <tbody className={styles.tableBody}>{children}</tbody>;
  }

  return <tbody className={styles.tableBody}>{sortedChildren}</tbody>;
};

export default TableBody;
