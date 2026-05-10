# ITW - Projekt 2

**Autor:** Michal Řezníček (xreznim00)
**Předmět:** Tvorba webových stránek (ITW), FIT VUT
**Live:** https://rizekk18.github.io/

## O čem to je

Single-page osobní portfolio stylizované jako **technický výkres / blueprint**.
Tmavě modré pozadí s mřížkou, žluté akcenty jako poznámky
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
- **SVG** - `img/ruler.svg` (pravítko jako oddělovač sekcí).
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

Firefox na Fedoře a Safari na iPhonu. HTML i CSS prošly W3C validátorem.

## AI nástroje

Použil jsem **Claude** (Anthropic) jako asistenta - pomohl mi:

- podle mého rozpisu sekcí rozepsat sémantické HTML5 tagy
  (`<header>`, `<section>`, `<article>`, `<dl>`)
- vysvětlit, jak fungují CSS animace (`@keyframes`, `animation`)
  a responsive typografie přes `clamp()`
- poradit s JS pro hamburger menu
- vysvětlit syntax pro `calc()` a vrstvený `linear-gradient` pozadí

Na závěr jsem si nechal od Clauda projít CSS a navrhnout zjednodušení
(sjednocení stylu, odstranění redundance).

**Sám jsem dělal:**

- vizuální koncept (blueprint téma, paleta, typografii)
- veškerý obsah (texty, výběr projektů)
- rozhodnutí o struktuře sekcí a layoutu
- CSS Grid layout (mobile-first, breakpoint na desktop)
- úprava fotek (crop, resize)
- postupné doladění a deploy na GitHub Pages