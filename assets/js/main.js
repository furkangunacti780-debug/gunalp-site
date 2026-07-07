/* GÜNALP — minimal vanilla JS: nav toggle, scroll reveal, lightbox */
(function () {
  "use strict";

  /* ---- Mobile nav ---- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links && nav) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Workshop video: click cover to load & play ---- */
  document.querySelectorAll(".video-cover").forEach(function (btn) {
    var video = btn.parentElement.querySelector("video");
    if (!video) return;
    btn.addEventListener("click", function () {
      btn.hidden = true;
      video.hidden = false;
      video.play();
    });
  });

  /* ---- Lightbox for galleries ---- */
  var lb = document.querySelector(".lb");
  if (lb) {
    var lbImg = lb.querySelector("img");
    var openLb = function (src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    var closeLb = function () {
      lb.classList.remove("open");
      document.body.style.overflow = "";
      lbImg.src = "";
    };
    document.querySelectorAll("[data-lb]").forEach(function (img) {
      img.addEventListener("click", function () {
        openLb(img.getAttribute("data-lb") || img.currentSrc || img.src, img.alt);
      });
    });
    lb.addEventListener("click", closeLb);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lb.classList.contains("open")) closeLb();
    });
  }
})();
