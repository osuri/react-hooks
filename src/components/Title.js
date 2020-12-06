import React from "react";

function Title() {
  console.log("rendering title component");
  return (
    <div>
      <h4>Hello</h4>
    </div>
  );
}
export default React.memo(Title);
