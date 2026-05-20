// ═══════════════════════════════════════════════════
//  dati.js — Seconda Pelle · Santerno Relax Store
//  Generato il: 2025-05-20
//
//  Questo file viene aggiornato dal pannello admin.
//  NON modificare manualmente — usa admin.html
// ═══════════════════════════════════════════════════

const CARTELLA_FOTO = "img/";

// ── CONTATTI ──────────────────────────────────────
const CONTATTI = {
  indirizzo:     "Via [Nome Via], [Numero]",
  citta:         "48020 Sant'Agata sul Santerno (RA)",
  telefono:      "+39 XXX XXX XXXX",
  telefonoHref:  "+39XXXXXXXXXX",
  email:         "info@secondapelle.it",
  instagram:     "@secondapelle",
  instagramUrl:  "https://instagram.com/secondapelle"
};

// ── ORARI ─────────────────────────────────────────
const ORARI = [
  { giorno:"Lunedì",    orario:"9:00 – 12:30  /  15:30 – 19:00", chiuso:false },
  { giorno:"Martedì",   orario:"9:00 – 12:30  /  15:30 – 19:00", chiuso:false },
  { giorno:"Mercoledì", orario:"9:00 – 12:30",                    chiuso:false },
  { giorno:"Giovedì",   orario:"9:00 – 12:30  /  15:30 – 19:00", chiuso:false },
  { giorno:"Venerdì",   orario:"9:00 – 12:30  /  15:30 – 19:00", chiuso:false },
  { giorno:"Sabato",    orario:"9:00 – 12:30  /  15:30 – 19:00", chiuso:false },
  { giorno:"Domenica",  orario:"Chiuso",                           chiuso:true  }
];

// ── CATEGORIE + CATALOGO ──────────────────────────
// I prodotti con  nuovo: true  appaiono automaticamente
// anche nella sezione "Le novità del momento"
const CATEGORIE = [
  {
    icon:"🩱", nome:"Intimo", desc:"Reggiseni, slip, body e biancheria intima di qualità",
    prodotti:[
      { foto:"", emoji:"🩱", nome:"Reggiseno senza ferretti",  note:"Cotone biologico, taglie 1–5",  prezzo:"", nuovo:false },
      { foto:"", emoji:"🩲", nome:"Slip uomo in cotone",       note:"Conf. 3 pezzi, varie taglie",   prezzo:"", nuovo:false },
      { foto:"", emoji:"👙", nome:"Bikini donna push-up",      note:"Colorazioni pastello 2025",     prezzo:"", nuovo:true  },
      { foto:"", emoji:"🩳", nome:"Boxer uomo linea relax",    note:"Tessuto jersey morbido",        prezzo:"", nuovo:false }
    ]
  },
  {
    icon:"👟", nome:"Calzature", desc:"Scarpe comode ed eleganti per ogni occasione",
    prodotti:[
      { foto:"", emoji:"👟", nome:"Sneaker bassa unisex",    note:"Suola antiscivolo", prezzo:"", nuovo:false },
      { foto:"", emoji:"🥿", nome:"Ballerina comfort donna", note:"Pelle morbida",     prezzo:"", nuovo:false },
      { foto:"", emoji:"🥾", nome:"Scarpa da lavoro uomo",   note:"Punta rinforzata",  prezzo:"", nuovo:false }
    ]
  },
  {
    icon:"👨‍🍳", nome:"Divise da lavoro", desc:"Abbigliamento professionale per cucina e ristorazione",
    prodotti:[
      { foto:"", emoji:"👨‍🍳", nome:"Giacca da chef bianca",   note:"100% cotone, facile da lavare", prezzo:"", nuovo:false },
      { foto:"", emoji:"👖",  nome:"Pantalone da cucina",     note:"Elastico in vita, colori vari", prezzo:"", nuovo:false },
      { foto:"", emoji:"🧤",  nome:"Grembiule professionale", note:"Con tasche laterali",           prezzo:"", nuovo:false }
    ]
  },
  {
    icon:"👙", nome:"Costumi da mare", desc:"Bikini, interi, shorts e accessori per l'estate",
    prodotti:[
      { foto:"", emoji:"👙", nome:"Bikini triangolo",     note:"Nuovi colori estate 2025", prezzo:"", nuovo:true  },
      { foto:"", emoji:"🩱", nome:"Costume intero donna", note:"Modello sportivo",         prezzo:"", nuovo:false },
      { foto:"", emoji:"🩳", nome:"Bermuda mare uomo",    note:"Tessuto quick-dry",        prezzo:"", nuovo:false }
    ]
  },
  {
    icon:"👕", nome:"Polo & T-shirt", desc:"Basicità e stile per il tempo libero",
    prodotti:[
      { foto:"", emoji:"👕", nome:"T-shirt basic unisex",   note:"100% cotone, 12 colori", prezzo:"", nuovo:false },
      { foto:"", emoji:"👔", nome:"Polo piquet uomo",       note:"Colletto a costine",     prezzo:"", nuovo:false },
      { foto:"", emoji:"👚", nome:"T-shirt donna scollo V", note:"Taglio slim fit",        prezzo:"", nuovo:false }
    ]
  },
  {
    icon:"🛁", nome:"Accapatoi", desc:"Accapatoi soffici e assorbenti per bagno o spa",
    prodotti:[
      { foto:"", emoji:"🛁", nome:"Accappatoio spugna adulto", note:"Vari colori, taglia unica", prezzo:"", nuovo:false },
      { foto:"", emoji:"🧸", nome:"Accappatoio bambino",       note:"Con cappuccio, 2–10 anni",  prezzo:"", nuovo:false }
    ]
  },
  {
    icon:"🌙", nome:"Pigiami", desc:"Pigiami comodi per notti rilassanti",
    prodotti:[
      { foto:"", emoji:"🌙", nome:"Pigiama lungo donna",  note:"Fantasia floreale",     prezzo:"", nuovo:true  },
      { foto:"", emoji:"😴", nome:"Pigiama corto unisex", note:"Jersey leggero",        prezzo:"", nuovo:false },
      { foto:"", emoji:"🧸", nome:"Pigiama bambino",      note:"Con stampe simpatiche", prezzo:"", nuovo:false }
    ]
  },
  {
    icon:"🧥", nome:"Abbigliamento professionale", desc:"Capi da lavoro per ogni settore",
    prodotti:[
      { foto:"", emoji:"🧥", nome:"Gilet da lavoro unisex", note:"Multi-tasca, resistente", prezzo:"", nuovo:false },
      { foto:"", emoji:"👔", nome:"Camicia da lavoro",      note:"Stiratura facile",        prezzo:"", nuovo:false }
    ]
  }
];
