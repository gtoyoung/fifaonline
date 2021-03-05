import React, { useEffect } from "react";
import { fifa } from "../library/fifaApi";

var Search = () => {
  useEffect(() => {
    return () => {
      fifa("matchtype.json", (data) => {
        console.log(data);
      });
    };
  }, []);

  return (
    <>
      <div>
        <h2>임시페이지</h2>
      </div>
    </>
  );
};

export default Search;
