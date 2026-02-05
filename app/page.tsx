"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Offer = { title: string; price: string; detail: string };
type Hotel = {
  id: string;
  name: string;
  city: string;
  phoneDisplay: string;
  phoneE164: string;
  instagramHandle: string;
  instagramUrl: string;
  image: string;
  offers: Offer[];
  notes?: string[];
};

const hotels: Hotel[] = [
  {
    id: "rias-altas",
    name: "Faranda Rías Altas",
    city: "A Coruña (Perillo)",
    phoneDisplay: "+34 981 63 72 05",
    phoneE164: "+34981637205",
    instagramHandle: "@farandariasaltas",
    instagramUrl: "https://www.instagram.com/farandariasaltas/?hl=es",
    image: "/hotels/rias-altas.jpg",
    offers: [
      { title: "Cena de Gala San Valentín", price: "42 € por persona", detail: "14 de febrero · A partir de las 21:00 h" },
      { title: "Pack San Valentín", price: "174 € por pareja", detail: "Noche + cena de gala + desayuno + decoración romántica" },
    ],
  },
  {
    id: "pathos",
    name: "Faranda Pathos",
    city: "Gijón",
    phoneDisplay: "+34 985 17 64 00",
    phoneE164: "+34985176400",
    instagramHandle: "@farandapathosgijon",
    instagramUrl: "https://www.instagram.com/farandapathosgijon/?hl=es",
    image: "/hotels/pathos.jpg",
    offers: [
      { title: "Oferta San Valentín", price: "114,90 € por pareja", detail: "Noche en habitación doble + desayuno + detalles de bienvenida" },
      { title: "Menú San Valentín", price: "44,90 € por pareja", detail: "Entrante para compartir + pizza individual + postre + lambrusco" },
    ],
  },
  {
    id: "alisas",
    name: "Faranda Alisas",
    city: "Santander",
    phoneDisplay: "+34 942 13 61 42",
    phoneE164: "+34942136142",
    instagramHandle: "@farandaalisassantander",
    instagramUrl: "https://www.instagram.com/farandaalisassantander/?hl=es",
    image: "/hotels/alisas.jpg",
    offers: [
      { title: "Oferta Especial San Valentín", price: "99 € por pareja", detail: "Detalle romántico + botella de cava o vino + late check-out (según dispo.) + upgrade (según ocupación) + invitación al Casino con copa de cava" },
    ],
  },
  {
    id: "tilos",
    name: "Faranda Los Tilos",
    city: "Santiago de Compostela",
    phoneDisplay: "+34 981 81 96 37",
    phoneE164: "+34981819637",
    instagramHandle: "@farandalostilos",
    instagramUrl: "https://www.instagram.com/farandalostilos/?hl=es",
    image: "/hotels/tilos.jpg",
    offers: [
      { title: "Oferta Especial San Valentín", price: "125 € por pareja", detail: "Noche + desayuno + decoración romántica + cóctel romántico en Panzzoni" },
      { title: "Menú Panzzoni San Valentín", price: "70 € (menú para 2)", detail: "Cena especial en Panzzoni (dentro del hotel)" },
    ],
    notes: ["Upgrade y late check-out bajo disponibilidad."],
  },
  {
    id: "marsol",
    name: "Faranda Marsol",
    city: "Candás (Asturias)",
    phoneDisplay: "602 69 67 43",
    phoneE164: "+34602696743",
    instagramHandle: "@farandamarsolcandas",
    instagramUrl: "https://www.instagram.com/farandamarsolcandas/?hl=es",
    image: "/hotels/marsol.jpg",
    offers: [
      { title: "San Valentín frente al mar", price: "160 € por pareja", detail: "Cena + noche de hotel + desayuno" },
      { title: "Menú San Valentín", price: "40 € por persona", detail: "Menú especial (según disponibilidad del restaurante)" },
    ],
  },
];

function HeartRow() {
  return (
    <div className="flex items-center gap-3 opacity-90">
      <div className="heart" />
      <div className="heart" />
      <div className="heart" />
      <div className="h-px flex-1 bg-white/40" />
    </div>
  );
}

function CTA({ phoneE164, instagramUrl }: { phoneE164: string; instagramUrl: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={`tel:${phoneE164}`}
        className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold shadow-soft transition hover:-translate-y-0.5"
      >
        Llamar
      </a>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/15"
      >
        Escribir por Instagram
      </a>
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState<string>("rias-altas");

  const activeHotel = useMemo(
    () => hotels.find((h) => h.id === active) ?? hotels[0],
    [active]
  );

  return (
    <main>
      <header className="relative overflow-hidden bg-farandaWine text-white">
        <div className="absolute inset-0 bg-roses opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <p className="font-semibold tracking-wide text-white/90">Faranda Hotels España</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl leading-[1.05]">
            San Valentín 2026
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Elige tu destino y reserva contactando directamente con el hotel. Plazas limitadas.
          </p>
          <div className="mt-6 max-w-2xl">
            <HeartRow />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => setActive(h.id)}
                className={[
                  "group text-left rounded-xl border border-white/15 bg-white/10 p-4 transition",
                  "hover:bg-white/15 hover:-translate-y-0.5",
                  active === h.id ? "ring-2 ring-white/50 bg-white/15" : "",
                ].join(" ")}
              >
                <div className="text-sm text-white/80">{h.city}</div>
                <div className="mt-1 font-semibold">{h.name}</div>
                <div className="mt-2 text-xs text-white/70">Ver ofertas</div>
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <Image
              src={activeHotel.image}
              alt={`${activeHotel.name} – ${activeHotel.city}`}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-soft">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl leading-tight">{activeHotel.name}</h2>
                <p className="mt-1 text-neutral-600">{activeHotel.city}</p>
                <p className="mt-3 text-sm text-neutral-700">
                  Contacto directo: <span className="font-semibold">{activeHotel.phoneDisplay}</span>
                  {" · "}
                  <span className="font-semibold">{activeHotel.instagramHandle}</span>
                </p>
              </div>
              <div className="hidden lg:block">
                <a
                  href={activeHotel.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-farandaWine px-4 py-3 font-semibold text-white transition hover:bg-farandaRed"
                >
                  Ver Instagram
                </a>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {activeHotel.offers.map((o, idx) => (
                <div key={idx} className="rounded-xl border border-neutral-200 p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{o.title}</h3>
                    <div className="font-display text-2xl text-farandaWine">{o.price}</div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">{o.detail}</p>
                </div>
              ))}
            </div>

            {activeHotel.notes?.length ? (
              <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700">
                {activeHotel.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            ) : null}

            <div className="mt-7 rounded-xl bg-farandaWine p-5 text-white">
              <p className="font-semibold">Reserva ahora</p>
              <p className="mt-1 text-sm text-white/80">
                Para más información y disponibilidad, contacta con el establecimiento.
              </p>
              <div className="mt-4">
                <CTA phoneE164={activeHotel.phoneE164} instagramUrl={activeHotel.instagramUrl} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-2xl bg-white p-7 shadow-soft">
          <h3 className="font-display text-2xl">¿Quieres ver todas las ofertas de un vistazo?</h3>
          <p className="mt-2 text-neutral-700">
            Aquí tienes los 5 hoteles con sus promos. Haz clic en “Llamar” o “Instagram” para reservar.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hotels.map((h) => (
              <div key={h.id} className="overflow-hidden rounded-2xl border border-neutral-200">
                <div className="relative h-40">
                  <Image src={h.image} alt={h.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-sm text-white/85">{h.city}</div>
                    <div className="font-semibold text-white">{h.name}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="space-y-3">
                    {h.offers.map((o, idx) => (
                      <div key={idx} className="rounded-xl bg-farandaCream p-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <div className="text-sm font-semibold">{o.title}</div>
                          <div className="text-sm font-semibold text-farandaWine">{o.price}</div>
                        </div>
                        <div className="mt-1 text-xs text-neutral-700">{o.detail}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href={`tel:${h.phoneE164}`}
                      className="inline-flex items-center justify-center rounded-xl bg-farandaWine px-4 py-3 font-semibold text-white transition hover:bg-farandaRed"
                    >
                      Llamar {h.phoneDisplay}
                    </a>
                    <a
                      href={h.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-3 font-semibold transition hover:-translate-y-0.5"
                    >
                      Escribir por Instagram
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-neutral-500">
                    Reservas y condiciones sujetas a disponibilidad.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-600">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-semibold text-neutral-900">Faranda Hotels España</div>
              <p className="mt-2">
                Campaña San Valentín 2026. Para más información, contacta con el hotel elegido.
              </p>
            </div>
            <div>
              <div className="font-semibold text-neutral-900">Privacidad</div>
              <p className="mt-2">
                Consulta la política de privacidad del establecimiento para conocer el tratamiento de datos y cómo ejercer tus derechos.
              </p>
            </div>
            <div>
              <div className="font-semibold text-neutral-900">Baja</div>
              <p className="mt-2">
                Si recibes esta comunicación por email y no deseas más información promocional, responde indicando “BAJA” o utiliza el enlace de cancelación del correo.
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs text-neutral-500">
            © {new Date().getFullYear()} Faranda Hotels & Resorts – España. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
