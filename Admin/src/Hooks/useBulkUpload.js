import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const token = localStorage.getItem("token");

const useBulkUpload = () => {
  async function urlToFile(url) {
    // make get filename & mimeType from url
    const filename = url.split("/")[3];
    const mimeType = `image/${filename.split(".")[1]}`;

    const response = await fetch(url); // Fetch the image from the URL
    const blob = await response.blob(); // Convert the response into a blob
    const newFile = new File([blob], filename, { type: mimeType }); // Create a File object
    return newFile;
  }

  const uploadProductObject = async (obj) => {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
      image,
    } = obj;

    const formData = new FormData();

    const images = await Promise.all(image.map((img) => urlToFile(img)));
    console.log("images", images);

    if (!images[0]) {
      return console.log("image not loaded:", images);
    } else {
      try {
        formData.set("name", name);
        formData.set("description", description);
        formData.set("price", price);
        formData.set("category", category);
        formData.set("subCategory", subCategory);
        formData.set("sizes", JSON.stringify(sizes));
        formData.set("bestseller", bestseller);

        //adding images according to upload quantity

        images[0] && formData.set("image1", images[0]);
        images[1] && formData.set("image2", images[1]);
        images[2] && formData.set("image3", images[2]);
        images[3] && formData.set("image4", images[3]);

        const add = await axios.post(
          backendUrl + "/api/product/add-product",
          formData,
          { headers: { token } }
        );

        if (add.data.success) {
          console.log(add.data.message);
        } else {
          console.log("Unauthorized login again");
        }
      } catch (error) {
        console.log("catch err:", error.message);
      }
    }
  };
  function arrayProducts(array) {
    for (let i = 0; i < array.length; i++) {
      uploadProductObject(array[i]);
    }
  }

  return { uploadProductObject, urlToFile, arrayProducts };
};

export default useBulkUpload;
