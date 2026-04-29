# ITW - Projekt 2

**Autor:** Michal Řezníček (xreznim00)
**Předmět:** Tvorba webových stránek (ITW), FIT VUT
**Live:** https://rizekk18.github.io/

## O čem to je

Single-page osobní portfolio stylizované jako **technický výkres / blueprint**.
Tmavě modré pozadí s mřížkou, monospace nadpisy, žluté akcenty jako poznámky
na výkresu a v patičce rohové razítko (`DRAWN BY / SCALE / VERSION / DATE`).

### Sekce

1. Hero
2. About - text + foto + spec sheet
3. Education - časová osa škol
4. Skills - Languages / Tools / Systems
5. Projects - IZP, IJC, IOS, IZLO
6. Interests - Hockey, Gaming, Movies & Shows (sekce s podsekcemi)
7. Contact

## Co jsem použil

- **HTML5** sémanticky (`<header>`, `<nav>`, `<section>`, `<article>`, `<dl>`, `<ol>`).
- **CSS3** ručně, žádný framework. Mobile-first, layout přes Grid + Flexbox,
  pozadí je vrstvený `linear-gradient` (blueprint mřížka).
- **SVG** - `img/ruler.svg` (engineering pravítko jako oddělovač sekcí).
- **JS** - hamburger menu na mobilu (přepíná třídu `.is-open` na navigaci,
  po kliknutí na odkaz se menu samo zavře).

## Soubory

```
xreznim00/
├── index.html
├── css/style.css
├── js/main.js
├── img/        (profile.jpg, hockey.jpg, ruler.svg)
└── README.md
```

## Testováno

Firefox a Chrome na Linuxu. HTML i CSS validuju přes W3C validator před
odevzdáním.

## AI nástroje

Použil jsem **Claude** (Anthropic) jako asistenta - pomohl mi:

- vygenerovat HTML kostru podle popisu, jaké sekce má obsahovat
- vysvětlit, jak fungují CSS animace (`@keyframes`, `animation`)
- s JS (hamburger menu)
- doladit drobnosti (např. `clamp()`, `calc()`, SVG)

Ve VS Code jsem měl zapnutý **GitHub Copilot** na autocomplete (uzavírání
tagů, opakující se vzory).

**Sám jsem dělal:**

- vizuální koncept (blueprint téma, paleta, typografii)
- veškerý obsah (texty, výběr projektů, hodnoty ve spec sheetech)
- rozhodnutí o struktuře sekcí
- CSS Grid layout (mobile-first, breakpoint na desktop)
- úprava fotek (crop, resize)
- postupné doladění a deploy na GitHub Pages