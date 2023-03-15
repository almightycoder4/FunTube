import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

export const Loader = () => {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "20%",
        position: "sticky",
      }}
    >
      <SyncLoader color="#e61414" cssOverride={{}} />
    </div>
  );
};
