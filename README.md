# Campo Aperto — sito dimostrativo

**Demo online → https://gxmich.github.io/campo-aperto-demo/**

> ### Attività di fantasia
>
> **Campo Aperto non esiste.** Il centro cinofilo, l'educatrice «Irene», l'indirizzo a
> Roverasca (paese inventato), il telefono `+39 000 000 0000` e l'email su
> `campo-aperto.example` sono inventati. Logo e favicon sono disegnati per la demo.
>
> Tutte le pagine hanno `<meta name="robots" content="noindex, nofollow">` e il
> `robots.txt` blocca l'intero sito (su un *project site* di GitHub Pages il `robots.txt`
> non viene letto dai crawler: la protezione effettiva è il `noindex`).
>
> Il modulo di contatto è simulato: compone il messaggio e lo mostra sotto il pulsante,
> ma non apre WhatsApp, non invia niente e non salva dati. La mappa è un segnaposto.

Sito vetrina per un centro cinofilo: corsi di educazione e sport, servizi su prenotazione,
staff, eventi, domande frequenti e contatti. Pagina unica in **HTML + CSS + JavaScript
vanilla**, senza build e senza dipendenze (solo i font da Google Fonts).

## Cosa mostra la demo

- **Corsi filtrabili** per tipo (educazione, sport, gruppo) con schede che rientrano
  animate; la scheda «Non sai quale scegliere?» resta sempre visibile.
- **Servizi** in una griglia a dimensioni diverse, con un servizio segnato come sospeso.
- **Modulo di contatto** con controllo del nome e messaggio composto con nome del cane,
  età e corso scelto.
- Header che cambia allo scroll, voce di menu attiva in base alla sezione, menu mobile
  che blocca lo scroll, comparse degli elementi e una striscia scorrevole con le attività.
- Pulsante flottante che porta al modulo e si nasconde quando il modulo è visibile.

## Struttura

```
index.html      Pagina unica
style.css       Stili
main.js         Menu, filtro corsi, comparse, modulo simulato
img/            Foto (JPEG) e logo SVG, elenco e licenze in CREDITI-FOTO.md
robots.txt      Disallow: /
```

## Come avviarla

Nessuna installazione: apri `index.html` nel browser oppure servi la cartella con
`python -m http.server 8765` e vai su `http://127.0.0.1:8765/`.

## Foto

Tutte da [Unsplash](https://unsplash.com) (Unsplash License). Autori e link in
[CREDITI-FOTO.md](CREDITI-FOTO.md).

---

Sito dimostrativo realizzato da [Michele Modica](https://www.modicamichele.it).
