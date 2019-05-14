$(".arrow, .nav-menu a, .nav-logo").on("click", function (e) {
  if ("" !== this.hash) {
    e.preventDefault();
    const t = this.hash;
    $("html, body").animate({ scrollTop: $(t).offset().top }, 800);
  }
}),
  $(".reg, .nav-reg, .operator-btn").on("click", function (e) {
    $(".page-bg")
      .addClass("blur-layout")
      .removeClass("blur"),
      $(".nav")
        .addClass("nav-away")
        .removeClass("show-nav"),
      $(".reg-form").addClass("active-form"),
      $(".close-container").removeClass("close-container-away"),
      $(".check-mark").hasClass("check-mark-active") &&
      ($(".check-mark").removeClass("check-mark-active"),
        $(".form-blur").css("filter", "blur(0)"));
  }),
  $(".close-container").on("click", function (e) {
    $(".page-bg")
      .removeClass("blur-layout")
      .addClass("blur"),
      $(".nav")
        .addClass("show-nav")
        .removeClass("nav-away"),
      $(".reg-form").removeClass("active-form"),
      $(this).addClass("close-container-away");
  }),
  $(".toggle-btn").on("click", function (e) {
    $(this).hasClass("guest")
      ? ($(this).removeClass("deactivate"),
        $(this)
          .siblings()
          .addClass("deactivate"),
        $(".member-inputs")
          .addClass("off")
          .removeClass("on"),
        $(".guest-inputs")
          .addClass("on")
          .removeClass("off"),
        $(".member-inputs .form-group input").val(""))
      : ($(this).removeClass("deactivate"),
        $(this)
          .siblings()
          .addClass("deactivate"),
        $(".member-inputs")
          .addClass("on")
          .removeClass("off"),
        $(".guest-inputs")
          .addClass("off")
          .removeClass("on"),
        $(".member-inputs .form-group input").val(""));
  }),
  $(".btn-submit").on("click", function (e) {
    $(".check-mark").addClass("check-mark-active"),
      $(".form-blur").css("filter", "blur(2px)"),
      setTimeout(function () {
        $(".page-bg")
          .removeClass("blur-layout")
          .addClass("blur"),
          $(".nav")
            .addClass("show-nav")
            .removeClass("nav-away"),
          $(".reg-form").removeClass("active-form"),
          $(".close-container").addClass("close-container-away");
      }, 2e3);
  }),
  $(window).on("scroll", function () {
    $(window).scrollTop() > 100
      ? $(".nav").addClass("nav-background")
      : $(".nav").removeClass("nav-background");
  }),
  $(window).on("scroll", function () {
    $(window).scrollTop() > 700
      ? $(".header-images").addClass("header-images-away")
      : $(".header-images").removeClass("header-images-away");
  }),
  $("#form-guest").submit(function () {
    var e = $(this);
    return (
      $.ajax({ type: "POST", url: "guest.php", data: e.serialize() }).done(
        function () {
          setTimeout(function () {
            e.trigger("reset");
          }, 1e3);
        }
      ),
      !1
    );
  }),
  $("#form-member").submit(function () {
    var e = $(this);
    return (
      $.ajax({ type: "POST", url: "member.php", data: e.serialize() }).done(
        function () {
          setTimeout(function () {
            e.trigger("reset");
          }, 1e3);
        }
      ),
      !1
    );
  });
const width = window.screen.width;
if ((console.log(width), width <= 801)) {
  const e = new ScrollMagic.Controller();
  new ScrollMagic.Scene({ triggerElement: ".nav" })
    .setClassToggle(".header-gradient", "fade-in")
    .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".header-image", "show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".anim-span-1", "show-title-1")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".anim-span-2", "show-title-2")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".anim-span-3", "show-title-3")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".anim-paragraph", "show-paragraph")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".about-title", "anim-about-title")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".paragraph-event", "show-paragraph")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".raw-header", "show-raw-header")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".raw-first", "raw-first-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".raw-second", "raw-second-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".raw-third", "raw-third-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".operator-header", "operator-header-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".operator-header2", "operator-header2-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".operator-paragraph", "operator-paragraph-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".operator-link", "operator-link-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".operator-btn", "operator-btn-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".btn-anim", "btn-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".raw-triangle-top", "raw-triangle-top-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".navr" })
      .setClassToggle(".raw-triangle-bottom", "raw-triangle-bottom-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".operator-vector", "operator-vector-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".operator-macbook", "operator-macbook-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".schedule-title", "schedule-title-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".one", "one-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".two", "two-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".three", "three-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".four", "four-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".seven", "seven-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".six", "six-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".five", "five-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".event-background", "event-background-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".event-gradient", "event-gradient-show")
      .addTo(e);
} else {
  const e = new ScrollMagic.Controller();
  new ScrollMagic.Scene({ triggerElement: ".nav" })
    .setClassToggle(".header-gradient", "fade-in")
    .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".header-image", "show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".anim-span-1", "show-title-1")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".anim-span-2", "show-title-2")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".anim-span-3", "show-title-3")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".header-btn", "btn-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".nav" })
      .setClassToggle(".anim-paragraph", "show-paragraph")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".about-title" })
      .setClassToggle(".about-title", "anim-about-title")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".about-title" })
      .setClassToggle(".paragraph-event", "show-paragraph")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".about-title" })
      .setClassToggle(".event-btn", "btn-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".raw-header" })
      .setClassToggle(".raw-header", "show-raw-header")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".raw-header" })
      .setClassToggle(".raw-first", "raw-first-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".raw-header" })
      .setClassToggle(".raw-second", "raw-second-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".raw-header" })
      .setClassToggle(".raw-third", "raw-third-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".operator-header" })
      .setClassToggle(".operator-header", "operator-header-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".operator-header" })
      .setClassToggle(".operator-header2", "operator-header2-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".operator-header" })
      .setClassToggle(".operator-paragraph", "operator-paragraph-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".operator-header" })
      .setClassToggle(".operator-link", "operator-link-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".operator-header" })
      .setClassToggle(".operator-btn", "operator-btn-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".raw-header" })
      .setClassToggle(".btn-anim", "btn-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".raw-header" })
      .setClassToggle(".raw-triangle-top", "raw-triangle-top-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".raw-header" })
      .setClassToggle(".raw-triangle-bottom", "raw-triangle-bottom-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".operator-header" })
      .setClassToggle(".operator-vector", "operator-vector-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".operator-header" })
      .setClassToggle(".operator-macbook", "operator-macbook-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".schedule-title" })
      .setClassToggle(".schedule-title", "schedule-title-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".schedule-title" })
      .setClassToggle(".one", "one-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".schedule-title" })
      .setClassToggle(".two", "two-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".schedule-title" })
      .setClassToggle(".three", "three-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".schedule-title" })
      .setClassToggle(".four", "four-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".schedule-title" })
      .setClassToggle(".seven", "seven-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".schedule-title" })
      .setClassToggle(".six", "six-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".schedule-title" })
      .setClassToggle(".five", "five-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".about-title" })
      .setClassToggle(".event-background", "event-background-show")
      .addTo(e),
    new ScrollMagic.Scene({ triggerElement: ".about-title" })
      .setClassToggle(".event-gradient", "event-gradient-show")
      .addTo(e);
}
$("#radio-a").on("click", function (e) {
  $(".nav-link-1").text("ABOUT EVENT"),
    $(".nav-link-2").text("SCHEDULE"),
    $(".nav-link-3").text("CONTACTS"),
    $(".nav-link-4")
      .text("REGISTRATION")
      .css("font-family", "Raleway"),
    $(".header-text .paragraph").text(
      "Is a platform for creating a mutually beneficial partnership and a direct opportunity for foreign companies to penetrate   Russian market."
    ),
    $(".about-title").text("About event"),
    $(".paragraph-event:first").text(
      "Unique event where businessmen  of the food industry  from GCC and the Middle East meet  Russian representatives of the  biggest retail  groups,  hypermarkets,  HORECA business, food complexes, traders, and food producers."
    ),
    $(".paragraph-event:last").text(
      "The event is held with the support of state structures of the participating countries and is covered by federal and internet Media."
    ),
    $(".raw-header").text("Reasons to participate in RAW:"),
    $(".raw-list li:first p").text(
      " The opportunity to present your products to potential buyers and start a partnership"
    ),
    $(".raw-list li:nth-child(2) p").text(
      "Meeting over 150 representatives of the Russian food industry, including interested traders, representatives of large retail chains, manufacturers and purchasers"
    ),
    $(".raw-list li:last p").text(
      "The opportunity to get acquainted with the realities of the Russian food market and step by step to get acquainted with how to start working on the Russian market with the help of a master class from the top manager of the largest retail group"
    ),
    $(".raw .reg").text("Registration"),
    $(".schedule-title").text("Schedule"),
    $(".one p").text("Registration, coffee break"),
    $(".two p").text("Opening remarks by state structures"),
    $(".three p").text("Workshop, meetings with Russian representatives"),
    $(".four p").text("Lunch"),
    $(".five p").text("Workshop, meetings with Russian representatives"),
    $(".six p").text(
      " Masterclass from a representative of a large retail group X5 Retail Group «How  foreign food producer can   enter Russian market and work successfully»"
    ),
    $(".seven p").text("Questions and Answers"),
    $(".operator-header").text("Event Operator"),
    $(".operator-header2").text(
      "Operator Russian - Arabian Workshop - Company “To Russia With Love”"
    ),
    $(".operator-paragraph").text(
      "To Russia With Love is a Russian travel company that transports foreign tourists to Russia in the following areas: tourism, business tourism, assistance for foreign businessmen in entering the Russian market, organizing events of international importance. The company's mission:  «Development of Russia as a global tourist destination. Creating a platform to support foreign business in the Russian Federation»"
    ),
    $(".operator button").text("Feedback"),
    $(".form-blur h2").text("Registration to event"),
    $(".form-blur p").text("Registartion as:"),
    $(".form-blur .buttons .member").text("Participant"),
    $(".form-blur .buttons .guest").text("Guest"),
    $(".form-blur button[type='submit']").text("Send request"),
    $(".guest-inputs .form-group:nth-child(1) input").attr(
      "placeholder",
      "Company name"
    ),
    $(".guest-inputs .form-group:nth-child(1) label").text("Company name"),
    $(".guest-inputs .form-group:nth-child(2) input").attr(
      "placeholder",
      "Post"
    ),
    $(".guest-inputs .form-group:nth-child(2) label").text("Post"),
    $(".guest-inputs .form-group:nth-child(3) input").attr(
      "placeholder",
      "Full name"
    ),
    $(".guest-inputs .form-group:nth-child(3) label").text("Full name"),
    $(".guest-inputs .form-group:nth-child(4) input").attr(
      "placeholder",
      "Phone number"
    ),
    $(".guest-inputs .form-group:nth-child(4) label").text("Phone number"),
    $(".guest-inputs .form-group:nth-child(5) input").attr(
      "placeholder",
      "Website"
    ),
    $(".guest-inputs .form-group:nth-child(5) label").text("Website"),
    $(".member-inputs .form-group:nth-child(1) input").attr(
      "placeholder",
      "Company name"
    ),
    $(".member-inputs .form-group:nth-child(1) label").text("Company name"),
    $(".member-inputs .form-group:nth-child(2) input").attr(
      "placeholder",
      "Official name for invoice, if defferent"
    ),
    $(".member-inputs .form-group:nth-child(2) label").text(
      "Official name for invoice, if defferent"
    ),
    $(".member-inputs .form-group:nth-child(3) input").attr(
      "placeholder",
      "Official address"
    ),
    $(".member-inputs .form-group:nth-child(3) label").text("Official address"),
    $(".member-inputs .form-group:nth-child(4) input").attr(
      "placeholder",
      "Country / City"
    ),
    $(".member-inputs .form-group:nth-child(4) label").text("Country / City"),
    $(".member-inputs .form-group:nth-child(5) input").attr(
      "placeholder",
      "Web site"
    ),
    $(".member-inputs .form-group:nth-child(5) label").text("Web site"),
    $(".member-inputs .form-group:nth-child(6) input").attr(
      "placeholder",
      "Company description"
    ),
    $(".member-inputs .form-group:nth-child(6) label").text(
      "Company description"
    ),
    $(".footer .footer-smile span:first").text("Conquer new horizons..."),
    $(".footer .footer-smile span:nth-child(2)").text("Russia!")
  $(".member-inputs .form-group input").val("");
}),
  $("#radio-b").on("click", function (e) {
    $(".nav-link-1").text("О МЕРОПРИЯТИИ"),
      $(".nav-link-2").text("РАСПИСАНИЕ"),
      $(".nav-link-3").text("КОНТАКТЫ"),
      $(".nav-link-4")
        .text("РЕГИСТРАЦИЯ")
        .css("font-family", "Arial"),
      $(".header-text .paragraph").text(
        "Это площадка для создания взаимовыгодного партнерства и прямая возможность для иностранных компаний выйти на российский рынок."
      ),
      $(".about-title").text("О мероприятии"),
      $(".paragraph-event:first").text(
        "Уникальное мероприятие, на котором встречаются бизнес  - сообщество пищевой индустрии GCC и Ближнего Востока  с российскими представителями индустрии питания: топ-менеджмент гипермаркетов, сотрудники HORECA, представители пищевых комплексов, трейдеры."
      ),
      $(".paragraph-event:last").text(
        "Мероприятие проходит при поддержки государственных структур стран – участников и освещается федеральными и интернет СМИ"
      ),
      $(".raw-header").text("Причины участия в RAW"),
      $(".raw-list li:first p").text(
        "Возможность представить свою продукцию потенциальным покупателям и начать партнерство"
      ),
      $(".raw-list li:nth-child(2) p").text(
        "Встреча более 150 представителей российской пищевой индустрии, среди которых будут заинтересованные трейдеры, представители крупных торговых сетей, производители и закупщики"
      ),
      $(".raw-list li:last p").text(
        "Возможность ознакомиться с реалиями российского пищевого рынка и возможностями выхода на него"
      ),
      $(".raw .reg").text("Зарегистрироваться"),
      $(".schedule-title").text("Расписание"),
      $(".one p").text("Регистрация кофе брейк"),
      $(".two p").text("Вступительное слово государственных структур"),
      $(".three p").text("Воркшоп, встречи с российскими представителями"),
      $(".four p").text("Ланч"),
      $(".five p").text("Воркшоп, встречи с российскими представителями"),
      $(".six p").text(
        "Мастер -класс от представителя крупной ритейл-группы X5 Retail Group «Как иностранному производителю выйти на российский рынок»"
      ),
      $(".seven p").text("Вопросы и ответы"),
      $(".operator-header").text("Оператор мероприятия"),
      $(".operator-header2").text(
        "Оператор Russian – Arabian Workshop – компания “To Russia With Love”"
      ),
      $(".operator-paragraph").text(
        "To Russia With Love – это российская туристическая компания, осуществляющая перевозку иностранных туристов в Россию по следующим направлениям: туризм, бизнес-туризм, помощь для иностранных бизнесменов в выходе на российский рынок, организация мероприятий международного значения. Миссия компании: «Развитие России как мирового туристического направления. Создание платформы для поддержки иностранного бизнеса в Российской Федерации»"
      ),
      $(".operator button").text("Напишите нам"),
      $(".form-blur h2").text("Регистрация на мероприятие"),
      $(".form-blur p").text("Зарегистрироваться как:"),
      $(".form-blur .buttons .member").text("Участник"),
      $(".form-blur .buttons .guest").text("Гость"),
      $(".form-blur button[type='submit']").text("Отправить заявку"),
      $(".guest-inputs .form-group:nth-child(1) input").attr(
        "placeholder",
        "Название компании"
      ),
      $(".guest-inputs .form-group:nth-child(1) label").text(
        "Название компании"
      ),
      $(".guest-inputs .form-group:nth-child(2) input").attr(
        "placeholder",
        "Должность"
      ),
      $(".guest-inputs .form-group:nth-child(2) label").text("Должность"),
      $(".guest-inputs .form-group:nth-child(3) input").attr(
        "placeholder",
        "ФИО"
      ),
      $(".guest-inputs .form-group:nth-child(3) label").text("ФИО"),
      $(".guest-inputs .form-group:nth-child(4) input").attr(
        "placeholder",
        "Телефон"
      ),
      $(".guest-inputs .form-group:nth-child(4) label").text("Телефон"),
      $(".guest-inputs .form-group:nth-child(5) input").attr(
        "placeholder",
        "Вебсайт"
      ),
      $(".guest-inputs .form-group:nth-child(5) label").text("Вебсайт"),
      $(".member-inputs .form-group:nth-child(1) input").attr(
        "placeholder",
        "Название компании"
      ),
      $(".member-inputs .form-group:nth-child(1) label").text(
        "Название компании"
      ),
      $(".member-inputs .form-group:nth-child(2) input").attr(
        "placeholder",
        "Официальное название для квитанции, если отличается"
      ),
      $(".member-inputs .form-group:nth-child(2) label").text(
        "Официальное название для квитанции, если отличается"
      ),
      $(".member-inputs .form-group:nth-child(3) input").attr(
        "placeholder",
        "Официальный адрес"
      ),
      $(".member-inputs .form-group:nth-child(3) label").text(
        "Официальный адрес"
      ),
      $(".member-inputs .form-group:nth-child(4) input").attr(
        "placeholder",
        "Страна / Город"
      ),
      $(".member-inputs .form-group:nth-child(4) label").text("Страна / Город"),
      $(".member-inputs .form-group:nth-child(5) input").attr(
        "placeholder",
        "Вебсайт"
      ),
      $(".member-inputs .form-group:nth-child(5) label").text("Вебсайт"),
      $(".member-inputs .form-group:nth-child(6) input").attr(
        "placeholder",
        "Описание компании"
      ),
      $(".member-inputs .form-group:nth-child(6) label").text(
        "Описание компании"
      ),
      $(".footer .footer-smile span:first").text("Покоряй новые горизонты..."),
      $(".footer .footer-smile span:nth-child(2)").text("Россия!")
    $(".member-inputs .form-group input").val("");
  });
