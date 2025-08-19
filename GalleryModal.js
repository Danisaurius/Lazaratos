// Get modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

// Loop through all gallery images
document.querySelectorAll(".gallery__image").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = img.nextElementSibling ? img.nextElementSibling.textContent : "";
  });
});

// Close modal when clicking the X
span.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside the image
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};