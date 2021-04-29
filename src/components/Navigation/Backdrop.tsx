import * as React from "react";

type Props = {
  show: boolean;
};

export const Backdrop: React.FC<Props> = (props) => {
  return props.show ? <div className="Backdrop"></div> : null;
};
