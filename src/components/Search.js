import React, { useEffect } from "react";
import { fifa } from "../library/fifaApi";

var Search = () => {
  const getInfo = () => {
    fifa("spid.json", (data) => {
      console.log(data);
    });
  };

  return (
    <>
      <div>
        <h2>임시페이지</h2>
        <button onClick={getInfo}>정보가져오기</button>
      </div>
    </>
  );
};

export default Search;
