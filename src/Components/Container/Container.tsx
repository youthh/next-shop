import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        maxWidth: "1300px",
        width: "100%",
        margin: "0 auto",
        padding: "0 10px",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
