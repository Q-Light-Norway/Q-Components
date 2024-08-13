"use client";

import styles from "./Tables.module.scss";

interface SortableProps {
  sortObject: any;
}

import {
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { SortDirections, TableContext } from "./Table";
import { CommonProps } from "@src/interface";

interface TableBodyInterface extends CommonProps {
  children?: ReactNode | ReactNode[] | false;
}

const TableBody = ({ children, ...restProps }: TableBodyInterface) => {
  const { sort } = useContext(TableContext);
  const [sortedChildren, setSortedChildren] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (!children || !Array.isArray(children) || !sort || !sort.key) return;

    console.log("isSorting", sort);

    const sorted = [...children].sort((a, b) => {
      if (!sort || !sort.key) {
        console.error("Sort key not defined");
        return 0;
      }

      const aElement = a as ReactElement<SortableProps>;
      const bElement = b as ReactElement<SortableProps>;

      if (!aElement || !bElement) {
        console.error("Sortable element not found");
        return 0;
      }

      if (!aElement.props || !bElement.props) {
        console.error("Sortable props not found");
        return 0;
      }

      if (!aElement.props.sortObject || !bElement.props.sortObject) {
        console.error("Sort object not found");
        return 0;
      }

      const aValue = aElement.props.sortObject[sort.key];
      const bValue = bElement.props.sortObject[sort.key];

      if (sort.direction === SortDirections.ASC) {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });

    setSortedChildren(sorted);
  }, [sort, children]);

  if (!children || !Array.isArray(children) || !sort || !sort.key) {
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
