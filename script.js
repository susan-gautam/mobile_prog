document.addEventListener("DOMContentLoaded", function () {
  // Shop Now button confirmation & hover
  const shopButton = document.querySelector(".btn");

  shopButton.addEventListener("mouseover", function () {
    shopButton.style.backgroundColor = "#e0e0e0";
    shopButton.style.color = "#000";
  });

  shopButton.addEventListener("mouseout", function () {
    shopButton.style.backgroundColor = "#eb3e2b";
    shopButton.style.color = "#000";
  });

  shopButton.addEventListener("click", function (event) {
    const confirmAction = confirm("Are you sure you want to visit the shop?");
    if (!confirmAction) {
      event.preventDefault();
    }
  });

  // jQuery s
  $(function () {
    // Toggle promo section
    $("#toggle-slide").click(function () {
      $("#promo-section").slideToggle("slow");
    });

    // Auto slide promo after 2s
    setTimeout(function () {
      $("#promo-section").slideDown("slow");
    }, 2000);

    // Simple fade-in for product cards
    $(".product-card").css("opacity", 0).each(function (i) {
      $(this).delay(500 * i).fadeTo(800, 1);
    });
  });
});
