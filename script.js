$(document).ready(function () {
  $(".banner .owl-carousel").owlCarousel({
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoHeight: true,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 6000,
    dots: true,
    items: 1,
    loop: true,
    margin: 0,
    margin: 0,
    nav: false,
  });

  $(".slider-bann").owlCarousel({
    autoplay: 0,
    autoplayHoverPause: 1,
    autoplayTimeout: 5000,
    center: 0,
    dots: 0,
    loop: 1,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: 0,
      },
      1000: {
        items: 4,
        nav: 0,
      },
    },
  });
  $(".testimonial .owl-carousel").owlCarousel({
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 3000,
    dots: false,
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
        nav: 0,
      },
      1000: {
        items: 2,
        nav: 0,
      },
    },
  });
  $("#lightgallery").lightGallery();
  $(window).scroll(function () {
    var p = $(window).scrollTop();
    if (p < 120) {
      $("header").removeClass("fixed animate");
    } else if (p >= 120 && p < 300) {
      $("header").addClass("fixed");
    } else {
      $("header").addClass("fixed animate");
    }
  });

  $(".navbar-toggler").click(function () {
    $($(this).data("target")).slideToggle(600);
  });
});
$(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "mail",
      dataType: "json",
      data: form_data,
    })
      .done(function (data) {
        $("#contact-form .msg")
          .html("Message sent successfully!")
          .addClass("success");
        $("#contact-form input, #contact-form textarea").val("");
      })
      .fail(function (data) {
        $("#contact-form .msg").html("An error occurred!").addClass("error");
      });
  });
});
