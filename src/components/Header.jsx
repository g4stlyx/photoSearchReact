import { useState } from "react";

function Header({search}) {
  const [value,setValue] = useState("")
  
  const handleFormSubmit = (event)=>{
    event.preventDefault();
    search(value)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="searchDiv">
      <h2>Photo Search App by Unsplash API</h2>
      <br></br>
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Search.." value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Header;
