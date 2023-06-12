import React from "react";
import styles from "./Loader.module.scss";

interface CircularProgressProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<CircularProgressProps> = ({
  size = 90,
  color = "#0887CF",
}) => {
  return (
    <div
      className={`flex justify-center items-center ${styles.circularProgress}`}
      style={{ width: size, height: size }}
    >
      <div
        className={styles.circularProgressInner}
        style={{ borderTopColor: color }}
      ></div>
    </div>
  );
};

export default Loader;
