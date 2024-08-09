import styles from "./Tables.module.scss";

import React, { createContext, useState } from "react";

interface TableInterface {
  children?: JSX.Element | JSX.Element[] | false;
  size?: { min: string; max: string }[];
  defaultKey?: string;
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

const Table = ({ children, size, defaultKey = "name" }: TableInterface) => {
  const [sort, setSort] = useState<SortState>({
    key: defaultKey,
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
        style={{
          gridTemplateColumns: size
            ?.map((size) => `minmax(${size.min}, ${size.max})`)
            .join(" "),
        }}
      >
        {children}
      </table>
    </TableContext.Provider>
  );
};

export default Table;
