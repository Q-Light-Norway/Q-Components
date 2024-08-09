import styles from "./Tables.module.scss";

import React from "react";

import { useContext, useState } from "react";
import { ArrowDown, ArrowsDownUp, ArrowUp } from "@phosphor-icons/react";
import { SortDirections, TableContext } from "./Table";

interface RowCellInterface {
  children?: JSX.Element | JSX.Element[] | false;
  sortKey?: string;
  className?: string;
  centered?: boolean;
  noSort?: boolean;
}

const RowCell = ({
  children,
  className,
  sortKey,
  centered,
  noSort,
}: RowCellInterface) => {
  const { sort, setSortKey, toggleSort } = useContext(TableContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (noSort) return;
    if (sort.key !== sortKey) setSortKey(sortKey);
    if (sort.key === sortKey) {
      toggleSort();
    }
  };

  return (
    <th
      className={`${styles.headerCell} ${className ? className : ""} ${centered ? "centered" : ""}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleClick()}
    >
      {children}

      {!noSort && isHovered && sort.key !== sortKey && (
        <ArrowsDownUp size={16} weight="light" />
      )}
      {!noSort &&
        sort.key === sortKey &&
        sort.direction === SortDirections.DESC && (
          <ArrowUp size={16} weight="light" />
        )}
      {!noSort &&
        sort.key === sortKey &&
        sort.direction === SortDirections.ASC && (
          <ArrowDown size={16} weight="light" />
        )}
    </th>
  );
};

export default RowCell;
