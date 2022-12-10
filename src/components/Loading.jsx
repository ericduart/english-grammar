import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  const override = {
    borderWidth: '5px'
  };

  return (
    <div className="flex items-center justify-center">
      <ClipLoader color='#adff2f' size={150} cssOverride={override} />

    </div>
  )

}