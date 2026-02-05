
const HOTELS = [
  {
    id: "alisas",
    name: "Faranda Alisas Santander",
    city: "Santander",
    img: "assets/img/alisas.jpg",
    images: ["assets/img/alisas.jpg", "assets/img/alisas_room1.jpg", "assets/img/alisas_room2.jpg"],
    phone: "+34942136142",
    phoneDisplay: "+34 942 13 61 42",
    instagram: "https://www.instagram.com/farandaalisassantander/?hl=es",
    pills: ["Pack 99€", "Detalles románticos"],
    offers: [
      {
        name: "Oferta Especial San Valentín",
        price: "99€ / pareja",
        items: [
          "Detalle romántico en la habitación a la llegada (decoración sutil, chocolates y pétalos)",
          "Botella de cava o vino seleccionada",
          "Posibilidad de late check-out según disponibilidad",
          "Upgrade de habitación cuando la ocupación lo permita",
          "Invitación al Casino de Santander con una copa de cava de cortesía"
        ]
      }
    ]
  },
  {
    id: "pathos",
    name: "Faranda Pathos Gijón",
    city: "Gijón",
    img: "assets/img/pathos.jpg",
    images: ["assets/img/pathos.jpg", "assets/img/pathos_room1.jpg", "assets/img/pathos_room2.jpg"],
    phone: "+34981637205",
    phoneDisplay: "+34 981 63 72 05",
    instagram: "https://www.instagram.com/farandapathosgijon/?hl=es",
    pills: ["Pack 114,90€", "Menú 44,90€"],
    offers: [
      {
        name: "Oferta Especial San Valentín",
        price: "114,90€ / pareja",
        items: [
          "Noche en habitación doble",
          "Detalle de bienvenida con bombones y cava o sidra champanada",
          "Posibilidad de late check-out según disponibilidad",
          "Cena romántica en Panzzoni"
        ]
      },
      {
        name: "Menú San Valentín (Panzzoni)",
        price: "44,90€ / pareja",
        items: [
          "1 entrante para compartir",
          "1 pizza individual por persona",
          "1 postre para compartir",
          "1 botella de Lambrusco para compartir"
        ]
      }
    ]
  },
  {
    id: "tilos",
    name: "Faranda Los Tilos Santiago",
    city: "Santiago de Compostela",
    img: "assets/img/tilos.jpg",
    phone: "+34981819637",
    phoneDisplay: "+34 981 81 96 37",
    instagram: "https://www.instagram.com/farandalostilos/?hl=es",
    images: ["assets/img/tilos.jpg","assets/img/tilos_room1.jpg","assets/img/tilos_room2.jpg"],
    pills: ["Pack 125€", "Menú 70€"],
    offers: [
      {
        name: "Oferta Especial San Valentín",
        price: "125€ / pareja",
        items: [
          "Noche en habitación doble",
          "Decoración romántica en la habitación",
          "Desayuno incluido",
          "Cóctel romántico en Panzzoni",
          "Upgrade de habitación y late check-out (bajo disponibilidad)"
        ]
      },
      {
        name: "Menú Panzzoni San Valentín",
        price: "70€ / 2 personas",
        items: [
          "Entrante: croquetas guanciale",
          "Primer plato: risotto de setas al prosecco",
          "Segundo plato: lubina al horno",
          "Dulce: tiramisú de fresas",
          "Maridaje: cóctel de bienvenida + Chianti Antiche"
        ]
      }
    ]
  },
  {
    id: "rias",
    name: "Faranda Rías Altas La Coruña",
    city: "A Coruña",
    img: "assets/img/rias_altas.jpg",
    phone: "+34981637205",
    phoneDisplay: "+34 981 63 72 05",
    instagram: "https://www.instagram.com/farandariasaltas/?hl=es",
    images: ["assets/img/rias_altas.jpg","assets/img/rias_altas_room1.jpg","assets/img/rias_altas_room2.jpg"],
    pills: ["Cena 42€", "Pack 174€"],
    offers: [
      {
        name: "Cena de Gala San Valentín (14 feb)",
        price: "42€ / persona",
        items: [
          "Menú especial San Valentín",
          "Copa de cava de bienvenida",
          "Ambiente íntimo y elegante",
          "A partir de las 21:00 h"
        ]
      },
      {
        name: "Oferta Especial San Valentín (14 feb)",
        price: "174€ / pareja",
        items: [
          "Noche en habitación doble",
          "Decoración romántica en la habitación",
          "Cena de Gala San Valentín (21:00 h)",
          "Desayuno buffet",
          "Extras románticos disponibles al reservar"
        ]
      }
    ]
  },
  {
    id: "marsol",
    name: "Faranda Marsol Candás",
    city: "Candás (Asturias)",
    img: "assets/img/marsol.jpg",
    images: ["assets/img/marsol.jpg", "assets/img/marsol_room1.jpg", "assets/img/marsol_room2.jpg"],
    phone: "+34602696743",
    phoneDisplay: "602 69 67 43",
    instagram: "https://www.instagram.com/farandamarsolcandas/?hl=es",
    pills: ["Pack 160€", "Menú 40€"],
    offers: [
      {
        name: "San Valentín frente al mar",
        price: "160€ / pareja",
        items: [
          "Cena",
          "Noche de hotel",
          "Desayuno",
          "Una experiencia única frente al mar"
        ]
      },
      {
        name: "Menú San Valentín",
        price: "40€ / persona",
        items: [
          "Entrante: brocheta de gambón, pixín y jamón",
          "Primero: bacalao estilo Marsol sobre cama de la huerta",
          "Segundo: solomillo ibérico con reducción PX y compota de manzana",
          "Postre: brocheta de fruta y chocolate"
        ]
      }
    ]
  }
];

const grid = document.getElementById("hotelGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalCity = document.getElementById("modalCity");
const modalOffers = document.getElementById("modalOffers");
const callBtn = document.getElementById("callBtn");
const igBtn = document.getElementById("igBtn");

function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  });
  children.forEach((c) => node.appendChild(c));
  return node;
}

function renderCards() {
  HOTELS.forEach((h) => {
    const pills = el("div", { class: "pills" }, h.pills.map((p) => el("span", { class: "pill pill--hot" }, [document.createTextNode(p)])));
    const top = el("div", { class: "card__top" }, [
      el("div", {}, [
        el("div", { class: "card__name" }, [document.createTextNode(h.name)]),
        el("div", { class: "card__city" }, [document.createTextNode(h.city)])
      ]),
      pills
    ]);

    const desc = el("p", { class: "card__desc" }, [
      document.createTextNode("Reserva directa con el hotel. Haz clic para ver el detalle de la oferta.")
    ]);

    const card = el("article", { class: "card", "data-hotel": h.id, tabindex: "0" }, [
      el("img", { class: "card__img", src: h.img, alt: h.name, loading: "lazy" }),
      el("div", { class: "card__body" }, [top, desc])
    ]);

    card.addEventListener("click", () => openModal(h.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openModal(h.id);
    });

    grid.appendChild(card);
  });
}

function openModal(id) {
  const h = HOTELS.find((x) => x.id === id);
  if (!h) return;

  modalTitle.textContent = h.name;
  modalCity.textContent = h.city;

  modalOffers.innerHTML = "";
  h.offers.forEach((o) => {
    const list = el("ul", { class: "offer__list" }, o.items.map((i) => el("li", {}, [document.createTextNode(i)])));
    const box = el("div", { class: "offer" }, [
      el("div", { class: "offer__top" }, [
        el("div", { class: "offer__name" }, [document.createTextNode(o.name)]),
        el("div", { class: "offer__price" }, [document.createTextNode(o.price)])
      ]),
      list
    ]);
    modalOffers.appendChild(box);
  });

  callBtn.href = `tel:${h.phone}`;
  callBtn.textContent = `Llamar (${h.phoneDisplay})`;
  igBtn.href = h.instagram;

  // Gallery (main image + thumbnails)
  const mainImg = document.getElementById("modalMainImg");
  const thumbs = document.getElementById("modalThumbs");
  if (mainImg && thumbs) {
    const imgs = (h.images && h.images.length ? h.images : [h.img]).slice(0, 3);
    mainImg.src = imgs[0];
    mainImg.alt = `Galería ${h.name}`;
    thumbs.innerHTML = "";
    imgs.forEach((src, i) => {
      const btn = el("button", { class: "thumb" + (i === 0 ? " is-active" : ""), type: "button" }, [
        el("img", { class: "thumb__img", src, alt: `${h.name} - foto ${i + 1}`, loading: "lazy" })
      ]);
      btn.addEventListener("click", () => {
        mainImg.src = src;
        thumbs.querySelectorAll(".thumb").forEach((x) => x.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
      thumbs.appendChild(btn);
    });
  }

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modal.addEventListener("click", (e) => {
  if (e.target && e.target.hasAttribute("data-close")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
});
document.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", closeModal));

renderCards();
