import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageFind from "./components/ImageFind";
import searchImages from "./api";

function App () {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return ( 
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageFind images={images}/>
    </div>
    );
}

export default App;