const hotels = [
  {
    id: "alisas",
    name: "Faranda Alisas Santander",
    city: "Santander (Cantabria)",
    subtitle: "Escapada romántica + detalles especiales",
    phoneDisplay: "+34 942 136 142",
    phoneTel: "+34942136142",
    instagram: "https://www.instagram.com/farandaalisassantander/?hl=es",
    pills: ["Pack 99€ / pareja", "Detalle romántico", "Cava o vino", "Late check-out"],
    offers: [
      {
        name: "Pack San Valentín · 14 febrero",
        desc: "Detalle romántico en la habitación (decoración sutil, chocolates y pétalos) · Botella de cava o vino seleccionada · Late check-out (según disponibilidad) · Upgrade (según ocupación) · Invitación al Casino de Santander con copa de cava de cortesía.",
        price: "99€ · por pareja"
      }
    ]
  },
  {
    id: "pathos",
    name: "Faranda Pathos Gijón",
    city: "Gijón (Asturias)",
    subtitle: "Cena romántica en Panzzoni + escapada",
    phoneDisplay: "+34 985 17 64 00",
    phoneTel: "+34985176400",
    instagram: "https://www.instagram.com/farandapathosgijon/?hl=es",
    pills: ["Pack 114,90€ / pareja", "Menú 44,90€ / pareja", "Panzzoni", "Late check-out"],
    offers: [
      {
        name: "Escapada + Cena romántica (Panzzoni)",
        desc: "Noche en habitación doble · Detalle de bienvenida con bombones + cava o sidra champanada · Posibilidad de late check-out (según disponibilidad) · Cena romántica en Panzzoni.",
        price: "114,90€ · por pareja"
      },
      {
        name: "Menú San Valentín (Panzzoni)",
        desc: "1 entrante para compartir · 1 pizza individual por persona · 1 postre para compartir · 1 botella de Lambrusco para compartir.",
        price: "44,90€ · por pareja"
      }
    ]
  },
  {
    id: "tilos",
    name: "Faranda Los Tilos (Santiago)",
    city: "Santiago de Compostela (A Coruña)",
    subtitle: "Pack romántico + menú especial",
    phoneDisplay: "+34 981 81 96 37",
    phoneTel: "+34981819637",
    instagram: "https://www.instagram.com/farandalostilos/?hl=es",
    pills: ["Pack 125€ / pareja", "Menú 70€ / 2 personas", "Decoración romántica"],
    offers: [
      {
        name: "Pack San Valentín · 14 febrero",
        desc: "Noche en habitación doble · Decoración romántica en la habitación · Desayuno incluido · Cóctel romántico.",
        price: "125€ · por pareja"
      },
      {
        name: "Menú San Valentín",
        desc: "Menú especial para 2 personas.",
        price: "70€ · menú para 2 personas"
      }
    ]
  },
  {
    id: "rias",
    name: "Faranda Rías Altas (A Coruña)",
    city: "A Coruña (Galicia)",
    subtitle: "Cena de Gala + escapada elegante",
    phoneDisplay: "+34 981 63 72 05",
    phoneTel: "+34981637205",
    instagram: "https://www.instagram.com/farandariasaltas/?hl=es",
    pills: ["Cena 42€ / persona", "Pack 174€ / pareja", "Cena de gala 21:00h", "Desayuno buffet"],
    offers: [
      {
        name: "Cena de Gala San Valentín",
        desc: "Copa de cava de bienvenida · Menú especial San Valentín · Detalles para una noche única · A partir de las 21:00h.",
        price: "42€ · por persona"
      },
      {
        name: "Pack Escapada + Cena de Gala",
        desc: "Noche en habitación doble · Decoración romántica · Cena de Gala San Valentín (21:00h) · Desayuno buffet.",
        price: "174€ · por pareja"
      }
    ]
  },
  {
    id: "marsol",
    name: "Faranda Marsol Candás",
    city: "Candás (Asturias)",
    subtitle: "San Valentín frente al mar",
    phoneDisplay: "602 69 67 43",
    phoneTel: "+34602696743",
    instagram: "https://www.instagram.com/farandamarsolcandas/?hl=es",
    pills: ["Pack 160€ / pareja", "Menú 40€ / persona", "Noche + desayuno"],
    offers: [
      {
        name: "Pack Frente al Mar",
        desc: "Cena · Noche de hotel · Desayuno.",
        price: "160€ · por pareja"
      },
      {
        name: "Menú San Valentín",
        desc: "Menú especial de San Valentín.",
        price: "40€ · por persona"
      }
    ]
  }
];

const grid = document.getElementById("hotelGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalCity = document.getElementById("modalCity");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalOffers = document.getElementById("modalOffers");
const callBtn = document.getElementById("callBtn");
const igBtn = document.getElementById("igBtn");

function cardTemplate(h){
  const pills = h.pills.map(p => `<span class="pill">${escapeHtml(p)}</span>`).join("");
  return `
    <article class="card" data-hotel="${h.id}">
      <div class="card__top">
        <span class="tag">💘 San Valentín</span>
        <span class="tag">${escapeHtml(h.city)}</span>
      </div>
      <h3 class="card__title">${escapeHtml(h.name)}</h3>
      <p class="card__subtitle">${escapeHtml(h.subtitle)}</p>
      <div class="pills">${pills}</div>
      <div class="card__cta">
        <a class="btn btn--primary" href="#" data-open="${h.id}">Ver ofertas</a>
        <a class="btn btn--ghost" href="tel:${h.phoneTel}">Llamar</a>
        <a class="btn btn--ghost card__link" href="${h.instagram}" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </article>
  `;
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

grid.innerHTML = hotels.map(cardTemplate).join("");

grid.addEventListener("click", (e) => {
  const open = e.target.closest("[data-open]");
  if(!open) return;
  e.preventDefault();
  const id = open.getAttribute("data-open");
  const h = hotels.find(x => x.id === id);
  if(!h) return;

  modalTitle.textContent = h.name;
  modalCity.textContent = h.city;
  modalSubtitle.textContent = h.subtitle;

  modalOffers.innerHTML = h.offers.map(o => `
    <div class="offer">
      <p class="offer__name">${escapeHtml(o.name)}</p>
      <p class="offer__desc">${escapeHtml(o.desc)}</p>
      <div class="offer__price">${escapeHtml(o.price)}</div>
    </div>
  `).join("");

  callBtn.textContent = `Llamar (${h.phoneDisplay})`;
  callBtn.href = `tel:${h.phoneTel}`;
  igBtn.href = h.instagram;

  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
});

modal.addEventListener("click", (e) => {
  const close = e.target.closest("[data-close]");
  if(!close) return;
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && modal.getAttribute("aria-hidden") === "false"){
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }
});
