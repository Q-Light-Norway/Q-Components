import styles from "./Tables.module.scss";

import React, { ReactNode } from "react";

import { useContext, useState } from "react";
import { ArrowDown, ArrowsDownUp, ArrowUp } from "@phosphor-icons/react";
import { SortDirections, TableContext } from "./Table";
import { CommonProps } from "@src/interface";

interface RowCellInterface extends CommonProps {
  children?: ReactNode | ReactNode[] | false;
  sortKey?: string;
  centered?: boolean;
  noSort?: boolean;
}

const RowCell = ({
  children,
  className,
  overrideClassName,
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

  const newClassName = overrideClassName
    ? overrideClassName
    : className
      ? className
      : styles.headerCell;

  return (
    <th
      className={newClassName}
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
