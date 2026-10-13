/**
 * Identità dello studio: l'UNICO punto in cui stanno nome, recapiti, indirizzo, social e dati
 * legali. Header, footer, contatti, intro e dati strutturati leggono da qui.
 *
 * Fonte: scheda Quotalo dello studio (nome, anno, servizi, zone, sede, sito).
 * Quello che la scheda non dice resta [[DA COMPILARE]] e in produzione non viene reso.
 *
 * Il dominio canonico sta in astro.config.mjs (SITE_URL), la palette in styles/global.css.
 */

export const STUDIO = {
  /** Nome completo, usato in <title>, Open Graph, footer e dati strutturati */
  nome: 'Studio Tecnico Geometra Claudio Bruni',

  /** Logotipo testuale di header, menu mobile e intro: due parole separate dal punto colorato */
  marchio: {
    a: 'claudio bruni',
    b: 'geometra',
  },

  /** Riga descrittiva del footer, accanto al copyright */
  descrizione: 'Studio tecnico · Imperia',

  tipoSchema: 'ProfessionalService',
  fondazione: '1999',
  fondatore: 'Claudio Bruni',

  telefono: {
    // dalla scheda reteimprese.it dello studio (stesso nome, indirizzo e sito)
    label: '347 451 5592',
    href: 'tel:+393474515592',
  },
  /** Secondo numero (WhatsApp / cellulare): bottone verde di Contatti e footer */
  telefono2: {
    label: '[[DA COMPILARE: cellulare o WhatsApp, se il cliente lo vuole pubblicare]]',
    href: 'tel:+390000000000',
  },
  email: '[[DA COMPILARE: email dello studio, non presente su Quotalo]]',

  indirizzo: {
    via: 'Via A. Lascaris, 19',
    cap: '18100',
    citta: 'Imperia',
    provincia: 'IM',
  },
  mappa: 'https://www.google.com/maps/search/?api=1&query=Via%20A.%20Lascaris%2019%2C%2018100%20Imperia',
  /** Coordinate per i dati strutturati; vuote finché non verificate */
  geo: { lat: '', lng: '' },

  /** Province in cui opera lo studio (footer, pagina Studio) */
  zone: ['Provincia di Imperia', 'Provincia di Savona'],

  orari: '[[DA COMPILARE: orari di ricevimento dello studio]]',

  /** Nessun profilo social dichiarato: nel footer la colonna mostra le zone servite */
  social: [] as { label: string; href: string }[],

  legale: '[[DA COMPILARE: P.IVA, C.F. e iscrizione al Collegio dei Geometri di Imperia]]',

  /** Colore della barra del browser su mobile: lo stesso --accent di styles/global.css */
  themeColor: '#1f5c99',
};

/** Indirizzo su una riga, per meta e testi */
export const indirizzoInRiga = () =>
  `${STUDIO.indirizzo.via}, ${STUDIO.indirizzo.cap} ${STUDIO.indirizzo.citta} (${STUDIO.indirizzo.provincia})`;
