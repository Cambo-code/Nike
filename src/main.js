// Get the image element
const mainImage = document.getElementById("mainImage");

// Define the image sources
const images = {
  shoe1: "./src/assets/images/big-shoe1.png",
  shoe2: "./src/assets/images/big-shoe2.png",
  shoe3: "./src/assets/images/big-shoe3.png",
};

// Preload images
Object.values(images).forEach((src) => {
  const img = new Image();
  img.src = src;
});

// Add event listeners for each button
document.getElementById("shoe1").addEventListener("click", () => {
  mainImage.src = images.shoe1; // Change image to Image 1
});

document.getElementById("shoe2").addEventListener("click", () => {
  mainImage.src = images.shoe2; // Change image to Image 2
});

document.getElementById("shoe3").addEventListener("click", () => {
  mainImage.src = images.shoe3; // Change image to Image 3
});
