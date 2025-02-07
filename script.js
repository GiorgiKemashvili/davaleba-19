document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".custom-box");
    const newSection = document.querySelector(".new-section"); // The section with the boxes
    const previousSection = document.querySelector(".first-page-section");
  
    const handleScroll = () => {
      const newSectionTop = newSection.getBoundingClientRect().top;
      const newSectionHeight = newSection.offsetHeight;
  
      if (
        newSectionTop <= window.innerHeight &&
        newSectionTop + newSectionHeight >= 0
      ) {
        boxes.forEach((box) => {
          box.classList.add("move-up");
        });
      } else {
        boxes.forEach((box) => {
          box.classList.remove("move-up");
        });
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });
  