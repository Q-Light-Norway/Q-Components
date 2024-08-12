import { CSSProperties, MouseEvent } from "react";

export interface CommonProps extends EventProps {
  className?: string;
  overrideClassName?: string;
  style?: CSSProperties;
}

export interface EventProps {
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  onDoubleClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
