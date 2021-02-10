$(document).ready(function () {
  let modified = document.lastModified;
  console.log(modified);
  $("#modification").html(`Last Modified: ${modified}`);

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if ($(window).width() <= 768) {
      if (scroll > 300) {
        $("#nav-wrap").css("background", "rgba(68, 68, 68, 1)");
      }
      if (scroll <= 318) {
        $("#nav-wrap").css("background", "transparent");
        $("#about-link").removeClass("current");
        $("#home-link").addClass("current");
        $("#resume-link").removeClass("current");
        $("#contact-link").removeClass("current");
      }

      if (scroll > 318 && scroll <= 1341) {
        $("#about-link").addClass("current");
        $("#home-link").removeClass("current");
        $("#resume-link").removeClass("current");
        $("#contact-link").removeClass("current");
      }

      if (scroll > 1341 && scroll <= 4397) {
        $("#home-link").removeClass("current");
        $("#projects-link").removeClass("current");
        $("#about-link").removeClass("current");
        $("#resume-link").addClass("current");
        $("#contact-link").removeClass("current");
      }
      if (scroll > 4397 && scroll <= 5510) {
        $("#about-link").removeClass("current");
        $("#resume-link").removeClass("current");
        $("#home-link").removeClass("current");
        $("#projects-link").addClass("current");
        $("#contact-link").removeClass("current");
      }

      if (scroll > 5510 && scroll <= 6200) {
        $("#about-link").removeClass("current");
        $("#resume-link").removeClass("current");
        $("#home-link").removeClass("current");
        $("#projects-link").removeClass("current");
        $("#contact-link").removeClass("current");
      }

      if (scroll > 6200) {
        $("#about-link").removeClass("current");
        $("#resume-link").removeClass("current");
        $("#home-link").removeClass("current");
        $("#projects-link").removeClass("current");
        $("#contact-link").addClass("current");
      }
    } else {
      if (scroll > 300) {
        $("#nav-wrap").css("background", "rgba(68, 68, 68, 0.9)");
      }
      if (scroll <= 300) {
        $("#nav-wrap").css("background", "transparent");
        $("#about-link").removeClass("current");
        $("#home-link").addClass("current");
        $("#resume-link").removeClass("current");
        $("#contact-link").removeClass("current");
      }

      if (scroll > 300 && scroll <= 920) {
        $("#about-link").addClass("current");
        $("#home-link").removeClass("current");
        $("#resume-link").removeClass("current");
        $("#contact-link").removeClass("current");
      }
      if (scroll > 920 && scroll <= 3300) {
        $("#home-link").removeClass("current");
        $("#projects-link").removeClass("current");
        $("#about-link").removeClass("current");
        $("#resume-link").addClass("current");
        $("#contact-link").removeClass("current");
      }
      if (scroll > 3300 && scroll <= 3820) {
        $("#about-link").removeClass("current");
        $("#resume-link").removeClass("current");
        $("#home-link").removeClass("current");
        $("#projects-link").addClass("current");
        $("#contact-link").removeClass("current");
      }

      if (scroll > 3820 && scroll <= 4500) {
        $("#about-link").removeClass("current");
        $("#resume-link").removeClass("current");
        $("#home-link").removeClass("current");
        $("#projects-link").removeClass("current");
        $("#contact-link").removeClass("current");
      }

      if (scroll > 4500) {
        $("#about-link").removeClass("current");
        $("#resume-link").removeClass("current");
        $("#home-link").removeClass("current");
        $("#projects-link").removeClass("current");
        $("#contact-link").addClass("current");
      }
    }
  });
});

function sendmail() {
  let subject = $("#subject").val();
  let body = $("#message").val();
  let name = $("#name").val();

  console.log(name, body, subject);

  body = `${body}<br>Regards<br>` + name;

  setTimeout(
    window.open(`mailto:smhimran@gmail.com?subject=${subject}&body=${body}`),
    100000
  );
}

$(".menu-button").click(function () {
  $(".nav").toggleClass("responsive");
});

$("ul#nav li").click(function () {
  if ($(".responsive")[0]) $(".nav").toggleClass("responsive");
});
