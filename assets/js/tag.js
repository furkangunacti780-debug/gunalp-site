/* =====================================================================
   GÜNALP — Google etiket yükleyici (Ads + Analytics)

   KULLANIM: Google Ads veya Analytics hesabını açtıktan sonra
   aldığın kimlikleri aşağıdaki listeye tırnak içinde yaz. Örnekler:

     var GOOGLE_TAG_IDS = ["AW-123456789"];                  // yalnız Ads
     var GOOGLE_TAG_IDS = ["AW-123456789", "G-ABC123XYZ"];   // Ads + GA4

   Liste boş olduğu sürece hiçbir şey yüklenmez (site şu anki gibi
   tamamen izleyicisiz kalır). Kimliği yapıştırınca tüm sayfalarda
   otomatik etkinleşir — başka dosyaya dokunmak gerekmez.
   ===================================================================== */
var GOOGLE_TAG_IDS = [];

(function () {
  "use strict";
  if (!GOOGLE_TAG_IDS || !GOOGLE_TAG_IDS.length) return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GOOGLE_TAG_IDS[0]);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag("js", new Date());
  for (var i = 0; i < GOOGLE_TAG_IDS.length; i++) {
    gtag("config", GOOGLE_TAG_IDS[i]);
  }
})();
