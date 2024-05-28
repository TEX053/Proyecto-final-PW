import { get, post, put, remove } from "../api/api.js";

const getProducts = async () => {
  try {
    const products = await get("http://localhost:8090/api/v1/producto");
    const productContainer = document.getElementById("productoLista");
    console.log(products);
    products.forEach((product) => {
      const productDiv = document.createElement("div");

      productDiv.classList.add("product");

      // contendor de la imagen con la descripción 
      const imageContainer = document.createElement("div");
      imageContainer.className = "image-container";
      const image = document.createElement("img");
      image.src = "../img/Productos/" + product.image;
      image.alt = product.name;
      imageContainer.appendChild(image);
      const description = document.createElement("div");
      description.className = "description"
      description.textContent = product.description.toUpperCase();
      imageContainer.appendChild(description);
      productDiv.appendChild(imageContainer);
      
      imageContainer.addEventListener("mouseenter", () => {
        description.style.display = "block";
        description.style.opacity = "0";
        setTimeout(() => {
          description.style.opacity = "1";
          description.style.transition = "opacity 0.2s";
        }, 10);
      });

      imageContainer.addEventListener("mouseleave", () => {
        description.style.opacity = "0";
        description.style.transition = "opacity 0.5s";
        setTimeout(() => {
          description.style.display = "none";
        }, 500);
      });


      const name = document.createElement("h2");
      name.textContent = product.name;
      productDiv.appendChild(name);

      const price = document.createElement("p");
      price.textContent = `$${product.price}`;
      productDiv.appendChild(price);

      productContainer.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
getProducts();
