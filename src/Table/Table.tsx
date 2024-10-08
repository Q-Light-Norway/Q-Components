"use client";

import styles from "./Tables.module.scss";

import { createContext, ReactNode, useState } from "react";
import { CommonProps } from "@src/interface";

interface TableInterface extends CommonProps {
  children?: ReactNode | ReactNode[] | false;
  size?: { min: string; max: string }[];
  defaultSortKey?: string;
}

export enum SortDirections {
  ASC = "asc",
  DESC = "desc",
}

interface SortState {
  key?: string;
  direction: SortDirections;
}

interface TableContextInterface {
  sort: SortState;
  setSort: (sort: SortState) => void;
  setSortKey: (key?: string) => void;
  toggleSort: () => void;
}

export const TableContext = createContext<TableContextInterface>(
  {} as TableContextInterface,
);

const Table = ({
  children,
  style,
  size,
  defaultSortKey,
  ...restProps
}: TableInterface) => {
  const [sort, setSort] = useState<SortState>({
    key: defaultSortKey || undefined,
    direction: SortDirections.ASC,
  });

  const toggleSort = () => {
    setSort((prevSort) => ({
      ...prevSort,
      direction:
        prevSort.direction === SortDirections.ASC
          ? SortDirections.DESC
          : SortDirections.ASC,
    }));
  };

  const setSortKey = (key?: string) => {
    setSort((prevSort) => ({
      key,
      direction: SortDirections.DESC,
    }));
  };

  return (
    <TableContext.Provider value={{ sort, setSort, setSortKey, toggleSort }}>
      <table
        className={styles.table}
        style={
          style
            ? style
            : {
                gridTemplateColumns: size
                  ?.map((size) => `minmax(${size.min}, ${size.max})`)
                  .join(" "),
              }
        }
        {...restProps}
      >
        {children}
      </table>
    </TableContext.Provider>
  );
};

export default Table;
