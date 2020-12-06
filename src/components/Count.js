import React from "react";

function Count({ text, value }) {
  console.log("count component invoked");
  return (
    <div>
      {text} - {value}
    </div>
  );
}

export default React.memo(Count);
