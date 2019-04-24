$(".arrow, .nav-menu a, .nav-logo").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

$(".reg, .nav-reg, .operator-btn").on("click", function(event) {
  $(".page-bg")
    .addClass("blur-layout")
    .removeClass("blur");
  $(".nav")
    .addClass("nav-away")
    .removeClass("show-nav");
  $(".reg-form").addClass("active-form");
  $(".close-container").removeClass("close-container-away");
});

$(".close-container").on("click", function(event) {
  $(".page-bg")
    .removeClass("blur-layout")
    .addClass("blur");
  $(".nav")
    .addClass("show-nav")
    .removeClass("nav-away");
  $(".reg-form").removeClass("active-form");
  $(this).addClass("close-container-away");
  // $(".nav").css("position", "fixed");
});

$(".toggle-btn").on("click", function(e) {
  if ($(this).hasClass("deactivate") && $(this).hasClass("guest")) {
    $(this).removeClass("deactivate");
    $(this)
      .siblings()
      .addClass("deactivate");
    $(".member-inputs")
      .addClass("off")
      .removeClass("on");
    $(".guest-inputs")
      .addClass("on")
      .removeClass("off");
  } else {
    $(this).removeClass("deactivate");
    $(this)
      .siblings()
      .addClass("deactivate");
    $(".member-inputs")
      .addClass("on")
      .removeClass("off");
    $(".guest-inputs")
      .addClass("off")
      .removeClass("on");
  }
});

// navbar
$(window).on("scroll", function() {
  const num = 100;

  if ($(window).scrollTop() > 100) {
    $(".nav").addClass("nav-background");
    //$('.page-header').addClass('hide-header');
  } else {
    $(".nav").removeClass("nav-background");
    //$('.page-header').removeClass('hide-header');
  }
});

$(window).on("scroll", function() {
  const num = 700;

  if ($(window).scrollTop() > num) {
    $(".header-images").addClass("header-images-away");
  } else {
    $(".header-images").removeClass("header-images-away");
  }
});

//E-mail Ajax Send
$("#form-member, #form-guest").submit(function() {
  //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    alert("Thank you!");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

// ScrollMagic

const controller = new ScrollMagic.Controller();

// Header Animations
const ourScence = new ScrollMagic.Scene({
  triggerElement: ".nav"
})
  .setClassToggle(".header-gradient", "fade-in")
  .addTo(controller);

const ourScence2 = new ScrollMagic.Scene({
  triggerElement: ".nav"
})
  .setClassToggle(".header-image", "show")
  .addTo(controller);

const ourScence3 = new ScrollMagic.Scene({
  triggerElement: ".nav"
})
  .setClassToggle(".anim-span-1", "show-title-1")
  .addTo(controller);

const ourScence4 = new ScrollMagic.Scene({
  triggerElement: ".nav"
})
  .setClassToggle(".anim-span-2", "show-title-2")
  .addTo(controller);

const ourScence5 = new ScrollMagic.Scene({
  triggerElement: ".nav"
})
  .setClassToggle(".anim-span-3", "show-title-3")
  .addTo(controller);

const ourScence6 = new ScrollMagic.Scene({
  triggerElement: ".nav"
})
  .setClassToggle(".anim-paragraph", "show-paragraph")
  .addTo(controller);

// event
const ourScence7 = new ScrollMagic.Scene({
  triggerElement: ".about-title"
})
  .setClassToggle(".about-title", "anim-about-title")
  .addTo(controller);

const ourScence8 = new ScrollMagic.Scene({
  triggerElement: ".about-title"
})
  .setClassToggle(".paragraph-event", "show-paragraph")
  .addTo(controller);

// raw
const ourScence9 = new ScrollMagic.Scene({
  triggerElement: ".raw-header"
})
  .setClassToggle(".raw-header", "show-raw-header")
  .addTo(controller);

const ourScence10 = new ScrollMagic.Scene({
  triggerElement: ".raw-header"
})
  .setClassToggle(".raw-first", "raw-first-show")
  .addTo(controller);

const ourScence11 = new ScrollMagic.Scene({
  triggerElement: ".raw-header"
})
  .setClassToggle(".raw-second", "raw-second-show")
  .addTo(controller);

const ourScence12 = new ScrollMagic.Scene({
  triggerElement: ".raw-header"
})
  .setClassToggle(".raw-third", "raw-third-show")
  .addTo(controller);

// Operator

const ourScence13 = new ScrollMagic.Scene({
  triggerElement: ".operator-header"
})
  .setClassToggle(".operator-header", "operator-header-show")
  .addTo(controller);

const ourScence14 = new ScrollMagic.Scene({
  triggerElement: ".operator-header"
})
  .setClassToggle(".operator-header2", "operator-header2-show")
  .addTo(controller);

const ourScence15 = new ScrollMagic.Scene({
  triggerElement: ".operator-header"
})
  .setClassToggle(".operator-paragraph", "operator-paragraph-show")
  .addTo(controller);

const ourScence16 = new ScrollMagic.Scene({
  triggerElement: ".operator-header"
})
  .setClassToggle(".operator-link", "operator-link-show")
  .addTo(controller);

const ourScence17 = new ScrollMagic.Scene({
  triggerElement: ".operator-header"
})
  .setClassToggle(".operator-btn", "operator-btn-show")
  .addTo(controller);

// Btn

const ourScenceBtn = new ScrollMagic.Scene({
  triggerElement: ".raw-header"
})
  .setClassToggle(".btn-anim", "btn-show")
  .addTo(controller);

// Backgrounds
const ourScence18 = new ScrollMagic.Scene({
  triggerElement: ".raw-header"
})
  .setClassToggle(".raw-triangle-top", "raw-triangle-top-show")
  .addTo(controller);

const ourScence19 = new ScrollMagic.Scene({
  triggerElement: ".raw-header"
})
  .setClassToggle(".raw-triangle-bottom", "raw-triangle-bottom-show")
  .addTo(controller);

const ourScence20 = new ScrollMagic.Scene({
  triggerElement: ".operator-header"
})
  .setClassToggle(".operator-vector", "operator-vector-show")
  .addTo(controller);

const ourScence21 = new ScrollMagic.Scene({
  triggerElement: ".operator-header"
})
  .setClassToggle(".operator-macbook", "operator-macbook-show")
  .addTo(controller);

const ourScence22 = new ScrollMagic.Scene({
  triggerElement: ".schedule-title"
})
  .setClassToggle(".schedule-title", "schedule-title-show")
  .addTo(controller);

const ourScence23 = new ScrollMagic.Scene({
  triggerElement: ".schedule-title"
})
  .setClassToggle(".one", "one-show")
  .addTo(controller);

const ourScence24 = new ScrollMagic.Scene({
  triggerElement: ".schedule-title"
})
  .setClassToggle(".two", "two-show")
  .addTo(controller);

const ourScence25 = new ScrollMagic.Scene({
  triggerElement: ".schedule-title"
})
  .setClassToggle(".three", "three-show")
  .addTo(controller);

const ourScence26 = new ScrollMagic.Scene({
  triggerElement: ".schedule-title"
})
  .setClassToggle(".four", "four-show")
  .addTo(controller);

const ourScence29 = new ScrollMagic.Scene({
  triggerElement: ".schedule-title"
})
  .setClassToggle(".seven", "seven-show")
  .addTo(controller);

const ourScence28 = new ScrollMagic.Scene({
  triggerElement: ".schedule-title"
})
  .setClassToggle(".six", "six-show")
  .addTo(controller);

const ourScence27 = new ScrollMagic.Scene({
  triggerElement: ".schedule-title"
})
  .setClassToggle(".five", "five-show")
  .addTo(controller);

const ourScence30 = new ScrollMagic.Scene({
  triggerElement: ".about-title"
})
  .setClassToggle(".event-background", "event-background-show")
  .addTo(controller);

const ourScence31 = new ScrollMagic.Scene({
  triggerElement: ".about-title"
})
  .setClassToggle(".event-gradient", "event-gradient-show")
  .addTo(controller);
