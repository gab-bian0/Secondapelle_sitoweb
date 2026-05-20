// ═══════════════════════════════════════════════════
//  dati.js — Seconda Pelle · Santerno Relax Store
//  Generato il: 2026-05-20
//
//  Questo file viene aggiornato dal pannello admin.
//  NON modificare manualmente — usa admin.html
// ═══════════════════════════════════════════════════

const CARTELLA_FOTO = "img/";

// ── CONTATTI ──────────────────────────────────────
const CONTATTI = {
  "indirizzo": "Via [Nome Via], [Numero]",
  "citta": "48020 Sant'Agata sul Santerno (RA)",
  "telefono": "+39 XXX XXX XXXX",
  "telefonoHref": "+39XXXXXXXXXX",
  "email": "info@secondapelle.it",
  "instagram": "@secondapelle",
  "instagramUrl": "https://instagram.com/secondapelle"
};

// ── ORARI ─────────────────────────────────────────
const ORARI = [
  {
    "giorno": "Lunedì",
    "orario": "9:00 – 12:30  /  15:30 – 19:00",
    "chiuso": false
  },
  {
    "giorno": "Martedì",
    "orario": "9:00 – 12:30  /  15:30 – 19:00",
    "chiuso": false
  },
  {
    "giorno": "Mercoledì",
    "orario": "9:00 – 12:30",
    "chiuso": false
  },
  {
    "giorno": "Giovedì",
    "orario": "9:00 – 12:30  /  15:30 – 19:00",
    "chiuso": false
  },
  {
    "giorno": "Venerdì",
    "orario": "9:00 – 12:30  /  15:30 – 19:00",
    "chiuso": false
  },
  {
    "giorno": "Sabato",
    "orario": "9:00 – 12:30  /  15:30 – 19:00",
    "chiuso": false
  },
  {
    "giorno": "Domenica",
    "orario": "Chiuso",
    "chiuso": true
  }
];

// ── CATEGORIE + CATALOGO ──────────────────────────
// I prodotti con  nuovo: true  appaiono automaticamente
// anche nella sezione "Le novità del momento"
const CATEGORIE = [
  {
    "icon": "🩱",
    "nome": "Intimo",
    "desc": "Reggiseni, slip, body e biancheria intima di qualità",
    "prodotti": [
      {
        "foto": "",
        "emoji": "🩱",
        "nome": "Reggiseno senza ferretti",
        "note": "Cotone biologico, taglie 1–5",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🩲",
        "nome": "Slip uomo in cotone",
        "note": "Conf. 3 pezzi, varie taglie",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "👙",
        "nome": "Bikini donna push-up",
        "note": "Colorazioni pastello 2025",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🩳",
        "nome": "Boxer uomo linea relax",
        "note": "Tessuto jersey morbido",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "📦",
        "nome": "nuovo test",
        "note": "nidjnciunuiewueiuwnein",
        "prezzo": "€ 472",
        "nuovo": true
      }
    ]
  },
  {
    "icon": "👟",
    "nome": "Calzature",
    "desc": "Scarpe comode ed eleganti per ogni occasione",
    "prodotti": [
      {
        "foto": "",
        "emoji": "👟",
        "nome": "Sneaker bassa unisex",
        "note": "Suola antiscivolo",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🥿",
        "nome": "Ballerina comfort donna",
        "note": "Pelle morbida",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🥾",
        "nome": "Scarpa da lavoro uomo",
        "note": "Punta rinforzata",
        "prezzo": ""
      }
    ]
  },
  {
    "icon": "👨‍🍳",
    "nome": "Divise da lavoro",
    "desc": "Abbigliamento professionale per cucina e ristorazione",
    "prodotti": [
      {
        "foto": "",
        "emoji": "👨‍🍳",
        "nome": "Giacca da chef bianca",
        "note": "100% cotone, facile da lavare",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "👖",
        "nome": "Pantalone da cucina",
        "note": "Elastico in vita, colori vari",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🧤",
        "nome": "Grembiule professionale",
        "note": "Con tasche laterali",
        "prezzo": ""
      }
    ]
  },
  {
    "icon": "👙",
    "nome": "Costumi da mare",
    "desc": "Bikini, interi, shorts e accessori per l'estate",
    "prodotti": [
      {
        "foto": "",
        "emoji": "👙",
        "nome": "Bikini triangolo",
        "note": "Nuovi colori estate 2025",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🩱",
        "nome": "Costume intero donna",
        "note": "Modello sportivo",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🩳",
        "nome": "Bermuda mare uomo",
        "note": "Tessuto quick-dry",
        "prezzo": ""
      }
    ]
  },
  {
    "icon": "👕",
    "nome": "Polo & T-shirt",
    "desc": "Basicità e stile per il tempo libero",
    "prodotti": [
      {
        "foto": "",
        "emoji": "👕",
        "nome": "T-shirt basic unisex",
        "note": "100% cotone, 12 colori",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "👔",
        "nome": "Polo piquet uomo",
        "note": "Colletto a costine",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "👚",
        "nome": "T-shirt donna scollo V",
        "note": "Taglio slim fit",
        "prezzo": ""
      }
    ]
  },
  {
    "icon": "🛁",
    "nome": "Accapatoi",
    "desc": "Accapatoi soffici e assorbenti per bagno o spa",
    "prodotti": [
      {
        "foto": "",
        "emoji": "🛁",
        "nome": "Accappatoio spugna adulto",
        "note": "Vari colori, taglia unica",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🧸",
        "nome": "Accappatoio bambino",
        "note": "Con cappuccio, 2–10 anni",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "📦",
        "nome": "prova",
        "note": "crush test",
        "prezzo": "500",
        "nuovo": true
      }
    ]
  },
  {
    "icon": "🌙",
    "nome": "Pigiami",
    "desc": "Pigiami comodi per notti rilassanti",
    "prodotti": [
      {
        "foto": "",
        "emoji": "🌙",
        "nome": "Pigiama lungo donna",
        "note": "Fantasia floreale",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "😴",
        "nome": "Pigiama corto unisex",
        "note": "Jersey leggero",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "🧸",
        "nome": "Pigiama bambino",
        "note": "Con stampe simpatiche",
        "prezzo": ""
      }
    ]
  },
  {
    "icon": "🧥",
    "nome": "Abbigliamento professionale",
    "desc": "Capi da lavoro per ogni settore",
    "prodotti": [
      {
        "foto": "",
        "emoji": "🧥",
        "nome": "Gilet da lavoro unisex",
        "note": "Multi-tasca, resistente",
        "prezzo": ""
      },
      {
        "foto": "",
        "emoji": "👔",
        "nome": "Camicia da lavoro",
        "note": "Stiratura facile",
        "prezzo": ""
      }
    ]
  }
];
