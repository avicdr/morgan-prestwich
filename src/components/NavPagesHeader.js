import React from "react";

function NavPagesHeader({ title, path }) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center flex-column topSection">
        <h1>{title}</h1>
        <div className="small">{path}</div>
      </div>
    </div>
  );
}

export default NavPagesHeader;
