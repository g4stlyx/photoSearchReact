import { useState } from "react";
import { Container } from "react-bootstrap";
//css
import "./App.css";
//components
import Header from "./components/Header";
import searchImages from "./components/SearchImages"
import Gallery from "./components/Gallery"


function App() {

  const [images,setImages] = useState([])

  const handleSubmit = async (term) =>{
    const result = await searchImages(term)
    setImages(result)
  }

  return (
    <Container>
      <br></br>
      <Header search={handleSubmit} />
      <Gallery imagesPlaceholder={images}/>
    </Container>
  );
}

export default App;
