import React from "react";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className="relative p-8 bg-white w-full max-w-xl m-auto flex-col flex rounded-lg">
        <button className="absolute top-0 right-0 p-4" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img src={image.urls.regular} alt={image.alt_description} />
        <div className="mt-4">
          <p className="text-gray-700 font-semibold text-lg mb-2">
            {image.alt_description}
          </p>
          <div className="flex items-center">
            <img
              src={image.user.profile_image.small}
              alt={image.user.name}
              className="h-8 w-8 rounded-full mr-2"
            />
            <p className="text-gray-700 font-medium">{image.user.name}</p>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            Likes: {image.likes}
          </p>
          <div className="flex items-center">
            <a
              href={image.user.links.html}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 underline mr-2"
            >
              Visit Profile
            </a>
            <a
              href={image.links.html}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View on Unsplash
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
