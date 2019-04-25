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

  if ($(".check-mark").hasClass("check-mark-active")) {
    $(".check-mark").removeClass("check-mark-active");
    $(".form-blur").css("filter", "blur(0)");
  }
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

$(".btn-submit").on("click", function(e) {
  $(".check-mark").addClass("check-mark-active");
  $(".form-blur").css("filter", "blur(2px)");
  setTimeout(function() {
    $(".page-bg")
      .removeClass("blur-layout")
      .addClass("blur");
    $(".nav")
      .addClass("show-nav")
      .removeClass("nav-away");
    $(".reg-form").removeClass("active-form");
    $(".close-container").addClass("close-container-away");
  }, 2000);
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
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

// ScrollMagic

const width = window.screen.width;

console.log(width);

if (width <= 801) {
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
    triggerElement: ".nav"
  })
    .setClassToggle(".about-title", "anim-about-title")
    .addTo(controller);

  const ourScence8 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".paragraph-event", "show-paragraph")
    .addTo(controller);

  // raw
  const ourScence9 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".raw-header", "show-raw-header")
    .addTo(controller);

  const ourScence10 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".raw-first", "raw-first-show")
    .addTo(controller);

  const ourScence11 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".raw-second", "raw-second-show")
    .addTo(controller);

  const ourScence12 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".raw-third", "raw-third-show")
    .addTo(controller);

  // Operator

  const ourScence13 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".operator-header", "operator-header-show")
    .addTo(controller);

  const ourScence14 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".operator-header2", "operator-header2-show")
    .addTo(controller);

  const ourScence15 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".operator-paragraph", "operator-paragraph-show")
    .addTo(controller);

  const ourScence16 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".operator-link", "operator-link-show")
    .addTo(controller);

  const ourScence17 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".operator-btn", "operator-btn-show")
    .addTo(controller);

  // Btn

  const ourScenceBtn = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".btn-anim", "btn-show")
    .addTo(controller);

  // Backgrounds
  const ourScence18 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".raw-triangle-top", "raw-triangle-top-show")
    .addTo(controller);

  const ourScence19 = new ScrollMagic.Scene({
    triggerElement: ".navr"
  })
    .setClassToggle(".raw-triangle-bottom", "raw-triangle-bottom-show")
    .addTo(controller);

  const ourScence20 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".operator-vector", "operator-vector-show")
    .addTo(controller);

  const ourScence21 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".operator-macbook", "operator-macbook-show")
    .addTo(controller);

  const ourScence22 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".schedule-title", "schedule-title-show")
    .addTo(controller);

  const ourScence23 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".one", "one-show")
    .addTo(controller);

  const ourScence24 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".two", "two-show")
    .addTo(controller);

  const ourScence25 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".three", "three-show")
    .addTo(controller);

  const ourScence26 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".four", "four-show")
    .addTo(controller);

  const ourScence29 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".seven", "seven-show")
    .addTo(controller);

  const ourScence28 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".six", "six-show")
    .addTo(controller);

  const ourScence27 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".five", "five-show")
    .addTo(controller);

  const ourScence30 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".event-background", "event-background-show")
    .addTo(controller);

  const ourScence31 = new ScrollMagic.Scene({
    triggerElement: ".nav"
  })
    .setClassToggle(".event-gradient", "event-gradient-show")
    .addTo(controller);
} else {
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
}

// const controller = new ScrollMagic.Controller();

// // Header Animations
// const ourScence = new ScrollMagic.Scene({
//   triggerElement: ".nav"
// })
//   .setClassToggle(".header-gradient", "fade-in")
//   .addTo(controller);

// const ourScence2 = new ScrollMagic.Scene({
//   triggerElement: ".nav"
// })
//   .setClassToggle(".header-image", "show")
//   .addTo(controller);

// const ourScence3 = new ScrollMagic.Scene({
//   triggerElement: ".nav"
// })
//   .setClassToggle(".anim-span-1", "show-title-1")
//   .addTo(controller);

// const ourScence4 = new ScrollMagic.Scene({
//   triggerElement: ".nav"
// })
//   .setClassToggle(".anim-span-2", "show-title-2")
//   .addTo(controller);

// const ourScence5 = new ScrollMagic.Scene({
//   triggerElement: ".nav"
// })
//   .setClassToggle(".anim-span-3", "show-title-3")
//   .addTo(controller);

// const ourScence6 = new ScrollMagic.Scene({
//   triggerElement: ".nav"
// })
//   .setClassToggle(".anim-paragraph", "show-paragraph")
//   .addTo(controller);

// // event
// const ourScence7 = new ScrollMagic.Scene({
//   triggerElement: ".about-title"
// })
//   .setClassToggle(".about-title", "anim-about-title")
//   .addTo(controller);

// const ourScence8 = new ScrollMagic.Scene({
//   triggerElement: ".about-title"
// })
//   .setClassToggle(".paragraph-event", "show-paragraph")
//   .addTo(controller);

// // raw
// const ourScence9 = new ScrollMagic.Scene({
//   triggerElement: ".raw-header"
// })
//   .setClassToggle(".raw-header", "show-raw-header")
//   .addTo(controller);

// const ourScence10 = new ScrollMagic.Scene({
//   triggerElement: ".raw-header"
// })
//   .setClassToggle(".raw-first", "raw-first-show")
//   .addTo(controller);

// const ourScence11 = new ScrollMagic.Scene({
//   triggerElement: ".raw-header"
// })
//   .setClassToggle(".raw-second", "raw-second-show")
//   .addTo(controller);

// const ourScence12 = new ScrollMagic.Scene({
//   triggerElement: ".raw-header"
// })
//   .setClassToggle(".raw-third", "raw-third-show")
//   .addTo(controller);

// // Operator

// const ourScence13 = new ScrollMagic.Scene({
//   triggerElement: ".operator-header"
// })
//   .setClassToggle(".operator-header", "operator-header-show")
//   .addTo(controller);

// const ourScence14 = new ScrollMagic.Scene({
//   triggerElement: ".operator-header"
// })
//   .setClassToggle(".operator-header2", "operator-header2-show")
//   .addTo(controller);

// const ourScence15 = new ScrollMagic.Scene({
//   triggerElement: ".operator-header"
// })
//   .setClassToggle(".operator-paragraph", "operator-paragraph-show")
//   .addTo(controller);

// const ourScence16 = new ScrollMagic.Scene({
//   triggerElement: ".operator-header"
// })
//   .setClassToggle(".operator-link", "operator-link-show")
//   .addTo(controller);

// const ourScence17 = new ScrollMagic.Scene({
//   triggerElement: ".operator-header"
// })
//   .setClassToggle(".operator-btn", "operator-btn-show")
//   .addTo(controller);

// // Btn

// const ourScenceBtn = new ScrollMagic.Scene({
//   triggerElement: ".raw-header"
// })
//   .setClassToggle(".btn-anim", "btn-show")
//   .addTo(controller);

// // Backgrounds
// const ourScence18 = new ScrollMagic.Scene({
//   triggerElement: ".raw-header"
// })
//   .setClassToggle(".raw-triangle-top", "raw-triangle-top-show")
//   .addTo(controller);

// const ourScence19 = new ScrollMagic.Scene({
//   triggerElement: ".raw-header"
// })
//   .setClassToggle(".raw-triangle-bottom", "raw-triangle-bottom-show")
//   .addTo(controller);

// const ourScence20 = new ScrollMagic.Scene({
//   triggerElement: ".operator-header"
// })
//   .setClassToggle(".operator-vector", "operator-vector-show")
//   .addTo(controller);

// const ourScence21 = new ScrollMagic.Scene({
//   triggerElement: ".operator-header"
// })
//   .setClassToggle(".operator-macbook", "operator-macbook-show")
//   .addTo(controller);

// const ourScence22 = new ScrollMagic.Scene({
//   triggerElement: ".schedule-title"
// })
//   .setClassToggle(".schedule-title", "schedule-title-show")
//   .addTo(controller);

// const ourScence23 = new ScrollMagic.Scene({
//   triggerElement: ".schedule-title"
// })
//   .setClassToggle(".one", "one-show")
//   .addTo(controller);

// const ourScence24 = new ScrollMagic.Scene({
//   triggerElement: ".schedule-title"
// })
//   .setClassToggle(".two", "two-show")
//   .addTo(controller);

// const ourScence25 = new ScrollMagic.Scene({
//   triggerElement: ".schedule-title"
// })
//   .setClassToggle(".three", "three-show")
//   .addTo(controller);

// const ourScence26 = new ScrollMagic.Scene({
//   triggerElement: ".schedule-title"
// })
//   .setClassToggle(".four", "four-show")
//   .addTo(controller);

// const ourScence29 = new ScrollMagic.Scene({
//   triggerElement: ".schedule-title"
// })
//   .setClassToggle(".seven", "seven-show")
//   .addTo(controller);

// const ourScence28 = new ScrollMagic.Scene({
//   triggerElement: ".schedule-title"
// })
//   .setClassToggle(".six", "six-show")
//   .addTo(controller);

// const ourScence27 = new ScrollMagic.Scene({
//   triggerElement: ".schedule-title"
// })
//   .setClassToggle(".five", "five-show")
//   .addTo(controller);

// const ourScence30 = new ScrollMagic.Scene({
//   triggerElement: ".about-title"
// })
//   .setClassToggle(".event-background", "event-background-show")
//   .addTo(controller);

// const ourScence31 = new ScrollMagic.Scene({
//   triggerElement: ".about-title"
// })
//   .setClassToggle(".event-gradient", "event-gradient-show")
//   .addTo(controller);

$("#radio-b").on("click", function(e) {
  $(".nav-link-1").text("ABOUT EVENT");
  $(".nav-link-2").text("SCHEDULE");
  $(".nav-link-3").text("CONTACTS");
  $(".nav-link-4")
    .text("REGISTRATION")
    .css("font-family", "Raleway");
  $(".header-text .paragraph").text(
    "Is a platform for creating a mutually beneficial partnership and a direct opportunity for foreign companies to penetrate   Russian market."
  );
  $(".about-title").text("About event");
  $(".paragraph-event:first").text(
    "Unique event where businessmen  of the food industry  from GCC and the Middle East meet  Russian representatives of the  biggest retail  groups,  hypermarkets,  HORECA business, food complexes, traders, and food producers."
  );
  $(".paragraph-event:last").text(
    "The event is held with the support of state structures of the participating countries and is covered by federal and internet Media."
  );
  $(".raw-header").text("Reasons to participate in RAW:");
  $(".raw-list li:first p").text(
    " The opportunity to present your products to potential buyers and start a partnership"
  );
  $(".raw-list li:nth-child(2) p").text(
    "Meeting over 150 representatives of the Russian food industry, including interested traders, representatives of large retail chains, manufacturers and purchasers"
  );

  $(".raw-list li:last p").text(
    "The opportunity to get acquainted with the realities of the Russian food market and step by step to get acquainted with how to start working on the Russian market with the help of a master class from the top manager of the largest retail group"
  );

  $(".raw .reg").text("Registration");

  $(".schedule-title").text("Schedule");

  $(".one p").text("Registration, coffee break");
  $(".two p").text("Opening remarks by state structures");
  $(".three p").text("Workshop, meetings with Russian representatives");
  $(".four p").text("Lunch");
  $(".five p").text("Workshop, meetings with Russian representatives");
  $(".six p").text(
    " Masterclass from a representative of a large retail group X5 Retail Group «How  foreign food producer can   enter Russian market and work successfully»"
  );
  $(".seven p").text("Questions and Answers");

  $(".operator-header").text("Event Operator");

  $(".operator-header2").text(
    "Operator Russian - Arabian Workshop - Company “To Russia With Love”"
  );

  $(".operator-paragraph").text(
    "To Russia With Love is a Russian travel company that transports foreign tourists to Russia in the following areas: tourism, business tourism, assistance for foreign businessmen in entering the Russian market, organizing events of international importance. The company's mission:  «Development of Russia as a global tourist destination. Creating a platform to support foreign business in the Russian Federation»"
  );

  $(".operator button").text("Feedback");
});

$("#radio-a").on("click", function(e) {
  $(".nav-link-1").text("О МЕРОПРИЯТИИ");
  $(".nav-link-2").text("РАСПИСАНИЕ");
  $(".nav-link-3").text("КОНТАКТЫ");
  $(".nav-link-4")
    .text("РЕГИСТРАЦИЯ")
    .css("font-family", "Arial");
  $(".header-text .paragraph").text(
    "Это площадка для создания взаимовыгодного партнерства и прямая возможность для иностранных компаний выйти на российский рынок."
  );
  $(".about-title").text("О мероприятии");
  $(".paragraph-event:first").text(
    "Мероприятие проходит при поддержки государственных структур стран – участников и освещается федеральными и интернет СМИ"
  );
  $(".paragraph-event:last").text(
    "Мероприятие проходит при поддержки государственных структур стран – участников и освещается федеральными и интернет СМИ"
  );
  $(".raw-header").text("Причины участия в RAW");
  $(".raw-list li:first p").text(
    "Возможность представить свою продукцию потенциальным покупателям и начать партнерство"
  );
  $(".raw-list li:nth-child(2) p").text(
    "Встреча более 150 представителей российской пищевой индустрии, среди которых будут заинтересованные трейдеры, представители крупных торговых сетей, производители и закупщики"
  );
  $(".raw-list li:last p").text(
    "Возможность ознакомиться с реалиями российского пищевого рынка и возможностями выхода на него"
  );
  $(".raw .reg").text("Зарегистрироваться");

  $(".schedule-title").text("Расписание");

  $(".one p").text("Регистрация кофе брейк");
  $(".two p").text("Вступительное слово государственных структур");
  $(".three p").text("Воркшоп, встречи с российскими представителями");
  $(".four p").text("Ланч");
  $(".five p").text("Воркшоп, встречи с российскими представителями");
  $(".six p").text(
    "Мастер -класс от представителя крупной ритейл-группы X5 Retail Group «Как иностранному производителю выйти на российский рынок»"
  );
  $(".seven p").text("Вопросы и ответы");

  $(".operator-header").text("Оператор мероприятия");

  $(".operator-header2").text(
    "Оператор Russian – Arabian Workshop – компания “To Russia With Love”"
  );

  $(".operator-paragraph").text(
    "To Russia With Love – это российская туристическая компания, осуществляющая перевозку иностранных туристов в Россию по следующим направлениям: туризм, бизнес-туризм, помощь для иностранных бизнесменов в выходе на российский рынок, организация мероприятий международного значения. Миссия компании: «Развитие России как мирового туристического направления. Создание платформы для поддержки иностранного бизнеса в Российской Федерации»"
  );

  $(".operator button").text("Напишите нам");
});
// });
