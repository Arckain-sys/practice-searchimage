import SearchBar from "./components/SearchBar";
import ImageFind from "./components/ImageFind";
import searchImages from "./api";

function App () {
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
    };

    return ( 
    <div>
        <SearchBar onSubmit={handleSubmit}/>
    </div>
    );
}

export default App;