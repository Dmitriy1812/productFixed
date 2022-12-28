(function () {
  const productFixed = document.querySelector(".product__fixed");
  window.onscroll = () => {
    if (window.pageYOffset > 200) {
      productFixed.style.display = "block";
    } else {
      productFixed.style.display = "none";
    }
  };
})();
