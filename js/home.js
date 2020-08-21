$(document).ready(function () {
  $(".horizontal-slide").slick({
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 3,
    dots: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });

  var blog = 1;
  var image = 3;
  var url = [
    "./../assets/1.jpg",
    "./../assets/2.jpg",
    "./../assets/3.jpg",
    "./../assets/4.jpg",
    "./../assets/5.jpg",
    "./../assets/6.jpg",
    "./../assets/7.jpg",
    "./../assets/8.jpg",
    "./../assets/9.jpg",
    "./../assets/10.jpg",
  ];

  $(".blog-one").show();
  $(".blog-two").show();
  $(".blog-three").hide();
  $(".blog-four").hide();
  $(".blog-five").hide();
  $(".blog-six").hide();

  $(".blog-prev").click(function () {
    if (blog == 1) {
      blog = 3;

      $(".blogs").animate({
        opacity: "0.5",
        easing: "linear",
      });
      $(".blogs").animate({
        opacity: "1",
        easing: "linear",
      });

      $(".blog-one").hide();
      $(".blog-two").hide();
      $(".blog-three").hide();
      $(".blog-four").hide();
      $(".blog-five").show();
      $(".blog-six").show();
    } else if (blog == 2) {
      blog = 1;

      $(".blogs").animate({
        opacity: "0.5",
        easing: "linear",
      });
      $(".blogs").animate({
        opacity: "1",
        easing: "linear",
      });

      $(".blog-one").show();
      $(".blog-two").show();
      $(".blog-three").hide();
      $(".blog-four").hide();
      $(".blog-five").hide();
      $(".blog-six").hide();
    } else if (blog == 3) {
      blog = 2;

      $(".blogs").animate({
        opacity: "0.5",
        easing: "linear",
      });
      $(".blogs").animate({
        opacity: "1",
        easing: "linear",
      });

      $(".blog-one").hide();
      $(".blog-two").hide();
      $(".blog-three").show();
      $(".blog-four").show();
      $(".blog-five").hide();
      $(".blog-six").hide();
    }
  });

  $(".blog-next").click(function () {
    if (blog == 1) {
      blog = 2;

      $(".blogs").animate({
        opacity: "0.5",
        easing: "linear",
      });
      $(".blogs").animate({
        opacity: "1",
        easing: "linear",
      });

      $(".blog-one").hide();
      $(".blog-two").hide();
      $(".blog-three").show();
      $(".blog-four").show();
      $(".blog-five").hide();
      $(".blog-six").hide();
    } else if (blog == 2) {
      blog = 3;

      $(".blogs").animate({
        opacity: "0.5",
        easing: "linear",
      });
      $(".blogs").animate({
        opacity: "1",
        easing: "linear",
      });

      $(".blog-one").hide();
      $(".blog-two").hide();
      $(".blog-three").hide();
      $(".blog-four").hide();
      $(".blog-five").show();
      $(".blog-six").show();
    } else if (blog == 3) {
      blog = 1;

      $(".blogs").animate({
        opacity: "0.5",
        easing: "linear",
      });
      $(".blogs").animate({
        opacity: "1",
        easing: "linear",
      });

      $(".blog-one").show();
      $(".blog-two").show();
      $(".blog-three").hide();
      $(".blog-four").hide();
      $(".blog-five").hide();
      $(".blog-six").hide();
    }
  });

  $(".test-next").click(function () {
    if (image > 9) {
      exit();
    }
    image = image + 1;
    $("#imagetwo").animate({
      opacity: "0.5",
      height: "99%",
      width: "99%",
      easing: "linear",
    });

    $("#imagetwo,#imageone,#imagethree").animate({
      opacity: "1",
      height: "100%",
      width: "100%",
    });

    $("#imageone").attr("src", url[image - 1]);
    $("#imagetwo").attr("src", url[image - 3]);
    $("#imagethree").attr("src", url[image]);
  });

  $(".test-prev").click(function () {
    if (image <= 3) {
      $(".test-prev").attr("disabled", "disabled");
      exit();
    }
    image = image - 1;
    $("#imagetwo,#imageone,#imagethree").animate({
      opacity: "0.5",
      height: "99%",
      width: "99%",
      easing: "linear",
    });

    $("#imagetwo,#imageone,#imagethree").animate({
      opacity: "1",
      height: "100%",
      width: "100%",
    });

    $("#imageone").attr("src", "./../assets/" + (image - 2) + ".jpg");
    $("#imagetwo").attr("src", "./../assets/" + (image - 1) + ".jpg");
    $("#imagethree").attr("src", "./../assets/" + image + ".jpg");
  });
});
