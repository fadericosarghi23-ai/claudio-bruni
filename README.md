# Studio Tecnico Geometra Claudio Bruni — sito

Sito dello studio tecnico del geometra Claudio Bruni (Imperia), nato da `base-architettura-portfolio`.
Astro 5, statico, deploy su Netlify.

```bash
npm install
npm run dev       # http://localhost:4805
npm run build     # build statica in dist/
npm run slots     # cosa resta da compilare o da validare
npm run brand     # rigenera favicon e copertina OG da public/brand/*.svg
```

## Da dove vengono i contenuti

- **Scheda Quotalo** dello studio: nome, anno (1999), servizi, CTU del Tribunale di Imperia,
  zone (Imperia, Savona), sede (Via A. Lascaris 19), dominio (studiogeometrabruni.it).
- **Scheda reteimprese.it**: telefono 347 451 5592 (stesso nome, indirizzo e sito).
- **Testi scritti da noi** dove mancava materiale: marcati `[[DA VALIDARE]]`, da far confermare.
- **Lavori**: 8 "lavori tipo", uno per servizio, senza luoghi, anni o committenti inventati.
- **Foto**: stock provvisorie, non dello studio, elencate in [FOTO-STOCK.md](FOTO-STOCK.md).
- **Logo**: per ora è solo il nome dello studio (header, menu, intro). La favicon usa le iniziali.
  Online non esiste un marchio del cliente: il dominio è ancora la pagina d'attesa dell'hosting.

## Prima di pubblicare

1. Email, orari, P.IVA e iscrizione al Collegio in `src/lib/studio.ts`.
2. Endpoint del form in `src/pages/contatti.astro` (oggi non invia nulla) e informativa privacy.
3. Foto vere al posto delle stock, lavori reali al posto dei lavori tipo.
4. Conferma dei testi `[[DA VALIDARE]]` e della palette blu (`src/styles/global.css`).
