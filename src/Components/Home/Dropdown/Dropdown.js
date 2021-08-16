import React, { useState, useEffect } from "react";

function Dropdown() {
  const [option, setOption] = useState({ value: "html" });

  const handleChange = (e) => {
    setOption({ value: e.target.value });
    localStorage.setItem("selectedOption", JSON.stringify(option));
  };

  useEffect(() => {
    localStorage.setItem("selectedOption", JSON.stringify(option));
  }, []);

  return (
    <>
      <select value={option.value} onChange={(e) => handleChange(e)}>
        <option value="javscript">Javascript</option>
        <option value="css">Css</option>
        <option value="html">Html</option>
      </select>
    </>
  );
}
export default Dropdown;
