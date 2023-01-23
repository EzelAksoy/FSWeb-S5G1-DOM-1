const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
document.querySelectorAll("header nav a");
console.log(document.querySelectorAll("header nav a"));
const linkler = document.querySelectorAll("header nav a");

for (let i = 0; i < linkler.length; i++) {
  linkler[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  linkler[i].className = "italic";
}
const logoİmg = document.querySelector(".logo");
logoİmg.setAttribute("src", siteContent.images[`logo-img`]);

document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.images[`cta-img`]);

const kucukBaslık = document.querySelectorAll(".text-content h4");
const textParagraflar = document.querySelectorAll(".text-content p");
let kucukBaslıkİndeks = 0;
let textParagraflarindeks = 0;
for (let key in siteContent["ana-içerik"]) {
  if (key.includes("h4")) {
    kucukBaslık[kucukBaslıkİndeks].textContent = siteContent["ana-içerik"][key];
    kucukBaslıkİndeks = kucukBaslıkİndeks + 1;
  }
  if (key.includes("içer")) {
    textParagraflar[textParagraflarindeks].textContent =
      siteContent["ana-içerik"][key];
    textParagraflarindeks = textParagraflarindeks + 1;
  }
}

const middleİmg = document.querySelector("#middle-img");
middleİmg.src = siteContent.images["accent-img"];

document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];
document.querySelectorAll(".contact p")[0].textContent =
  siteContent.iletisim.adres;
document.querySelectorAll(".contact p")[1].textContent =
  siteContent.iletisim.telefon;
document.querySelectorAll(".contact p")[2].textContent =
  siteContent.iletisim.email;

const footer = document.querySelector("footer a");
footer.textContent = siteContent.footer["copyright"];
footer.className = "bold";
