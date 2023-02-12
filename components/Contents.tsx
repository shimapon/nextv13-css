import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Contents: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <h3 className="mt-4 text-xl">{title}</h3>
      <div className="mt-2"> {children}</div>
    </>
  );
};

export default Contents;
