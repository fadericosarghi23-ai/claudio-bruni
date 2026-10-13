import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection "progetti".
 * Nella base ci sono 8 schede segnaposto (npm run segnaposto le rigenera, sovrascrivendole).
 * Al riempimento: una scheda .md per progetto, foto in src/assets/progetti/<slug>/.
 * Le chiavi di "category" sono anche quelle dei filtri (progetti/index) e degli ambiti
 * (index, ambiti): se si cambiano qui, vanno cambiate anche lì.
 */
const progetti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/progetti' }),
  schema: ({ image }) =>
    z.object({
      /** Titolo del progetto, come lo chiama lo studio */
      title: z.string(),
      /** Sezione del portfolio, usata dai filtri */
      category: z.enum(['progettazione', 'catasto', 'perizie', 'sicurezza']),
      /** Etichetta leggibile della sezione */
      categoryLabel: z.string(),
      /** Località; vuota se non dichiarata */
      location: z.string().default(''),
      /** Anno; vuoto se non dichiarato */
      year: z.string().default(''),
      /** Chi ha firmato il progetto */
      credits: z.string().default(''),
      /** Autore delle fotografie */
      photoCredit: z.string().default(''),
      /** Estratto usato nel mazzo in home */
      excerpt: z.string(),
      /** Paragrafi della descrizione */
      body: z.array(z.string()),
      /** Description per il <meta> della pagina di dettaglio */
      seoDescription: z.string(),
      cover: image(),
      hero: image(),
      gallery: z.array(image()).default([]),
      /** Ordine di uscita nel portfolio */
      order: z.number(),
      /** Se true compare nel mazzo della home */
      featured: z.boolean().default(false),
      /** Facoltativo: pagina di origine sul sito precedente del cliente, per tracciabilità */
      fonteDettaglio: z.string().default(''),
    }),
});

export const collections = { progetti };
