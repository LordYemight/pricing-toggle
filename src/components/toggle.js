import React from "react";

const Toggle = ({ checked, onChange }) => {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
