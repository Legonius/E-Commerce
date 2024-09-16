import "dotenv/config.js";
import ImageKit from "imagekit";

// Initialize ImageKit with API keys
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY, // Public Key (API key)
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // Private Key (used for server-side operations)
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT, // URL endpoint
});

const uploadImage = async (imagePath, imageName) => {
  try {
    const result = await imagekit.upload({
      file: imagePath, // Image path or base64 string
      fileName: imageName, // File name for the uploaded image
    });
    return result.url;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export default uploadImage;
