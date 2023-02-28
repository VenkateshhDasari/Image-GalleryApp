import { useState, useEffect } from "react";
import Article from "./Article";
import ImageModal from "./ImageModal";

export default function GetImages() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
         setSelectedImage(image);
     };
    
      const handleCloseModal = () => {
     setSelectedImage(null);
     };


  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const data = await response.json();
      setImages(data.results);
    };

    if (searchQuery !== "") {
      fetchImages();
    }
  }, [searchQuery]);

  return (
    <>
      <div className="container mx-auto px-5 2xl:px-0">
        <div className="flex justify-center mb-5">
          <input
            type="text"
            placeholder="Search High Quality images,categories,wallpapers"
            className="w-full border border-gray-300 rounded-md py-2 px-4 "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {!images.length ? (
          <div>
            <h1>No images found.</h1>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            {images.map((image) => (
           <div key={image.id} onClick={() => handleImageClick(image)}>
             <Article {...image}  />
               </div>
             ))}
        </section>
        )}
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}

