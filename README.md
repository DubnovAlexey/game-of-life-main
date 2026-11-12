<!--suppress MarkdownUnresolvedFileReference -->

# Game of Life

[English](#english) · [Русский](#russian) · [עברית](#hebrew) · [Español](#spanish) · [Français](#french)

<a name="english"></a>

## English

Conway's Game of Life in the browser: draw a pattern on a 30 × 20 field and watch it live by Conway's rules.

**Live demo:** https://dubnovalexey.github.io/game-of-life-main/

### Quick tour

Draw a three-cell line and press Step to see it rotate. Compare Random with Start/Pause, change Speed, then Clear the field.

Review `nextGeneration()` and `render()` in `main.js`: the rules operate on Set/Map data, separately from DOM updates. The current field has 600 cells; a larger renderer remains a future option.

The language links above switch the documentation; they do not translate the existing demo interface.

### Features

- Click a cell to bring it to life, or drag across the field to draw (works with a mouse and a finger).
- **Start / Pause**, **Step** (one generation), **Random** (a quarter of the cells alive), **Clear** and a **Speed** slider.
- Generation and live-cell counters. The simulation stops by itself when everything dies.
- The field wraps around: a glider leaving on the right comes back on the left.
- Fits a phone screen: the cell size follows the screen width.

### How it works

- Live cells are kept in a `Set` of `"row_col"` keys.
- `nextGeneration(alive)` is a pure function: it counts neighbours only around live cells (a `Map` of counts) and applies the rules — a dead cell with exactly three neighbours is born, a live cell with two or three survives.
- Only cells that changed are repainted.
- One pointer handler on the whole field (event delegation) instead of 600 separate handlers.

### Tech stack

HTML5 · CSS Grid · JavaScript (DOM, `Set`, `Map`, Pointer Events) · GitHub Pages

### What I practised

- Building a grid from data instead of writing hundreds of `div` elements by hand.
- Separating the rules (a pure function) from drawing.
- Choosing data structures for speed: `Set` for live cells, `Map` for neighbour counts.

### Run locally

Open `index.html` in a browser.

### Planned improvements

These are proposals, not currently implemented features.

- Visual: add a small pattern palette and clearer live-cell states.
- Engineering: extract the pure rules into a directly testable module and add permanent toroidal-edge/pointer-cancel checks; measure before changing the renderer.
- Functionality: add selectable glider/pulsar patterns and import/export of a pattern.

---

<a name="russian"></a>

## Русский

**Игра «Жизнь»**

«Жизнь» Конвея в браузере: нарисуйте узор на поле 30 × 20 и смотрите, как он живёт по правилам Конвея.

**Демо:** https://dubnovalexey.github.io/game-of-life-main/

### Быстрый просмотр

Нарисуйте линию из трёх клеток и нажмите Step, чтобы увидеть её поворот. Сравните Random и Start/Pause, измените Speed и очистите поле через Clear.

Посмотрите `nextGeneration()` и `render()` в `main.js`: правила работают с Set/Map отдельно от обновления DOM. Сейчас поле содержит 600 клеток; другой рендерер для большой сетки остаётся вариантом развития.

Языковые ссылки выше переключают документацию, а не переводят существующий интерфейс демо.

### Возможности

- Щелчок оживляет клетку. Можно и рисовать, проводя по полю мышью или пальцем.
- **Start / Pause**, **Step** (одно поколение), **Random** (живая каждая четвёртая клетка), **Clear** и ползунок **Speed**.
- Счётчики поколения и живых клеток. Если всё вымерло, симуляция останавливается сама.
- Поле замкнуто: планер, ушедший вправо, появляется слева.
- Помещается на экране телефона: размер клетки зависит от ширины экрана.

### Как устроено

- Живые клетки хранятся в `Set` с ключами `"строка_столбец"`.
- `nextGeneration(alive)` — чистая функция. Она считает соседей только вокруг живых клеток (счётчики в `Map`) и применяет правила: мёртвая клетка с тремя соседями рождается, живая с двумя или тремя выживает.
- Перерисовываются только изменившиеся клетки.
- Один обработчик на всё поле (делегирование событий) вместо 600 отдельных.

### Стек

HTML5 · CSS Grid · JavaScript (DOM, `Set`, `Map`, Pointer Events) · GitHub Pages

### Чему научился

- Строить сетку из данных, а не писать сотни `div` вручную.
- Отделять правила (чистая функция) от рисования.
- Выбирать структуры данных для скорости: `Set` для живых клеток, `Map` для подсчёта соседей.

### Как запустить

Откройте `index.html` в браузере.

### План развития

Это предложения, а не уже реализованные возможности.

- Визуал: добавить небольшую палитру узоров и яснее выделить живые клетки.
- Инженерия: вынести чистые правила в непосредственно тестируемый модуль, закрепить проверки тороидального края и отмены рисования; смену рендерера обосновывать замерами.
- Функции: выбор планера/пульсара и импорт/экспорт узора.

---

<a name="hebrew"></a>

<div dir="rtl">

## עברית

**משחק החיים**

משחק החיים של קונוויי בדפדפן: מציירים תבנית על לוח של 30 × 20 ומסתכלים איך היא חיה לפי חוקי קונוויי.

**הדגמה:** https://dubnovalexey.github.io/game-of-life-main/

### סיור קצר

ציירו שורה של שלושה תאים ולחצו Step כדי לראות אותה מסתובבת. השוו Random עם Start/Pause, שנו Speed ונקו בעזרת Clear.

בדקו את `nextGeneration()` ואת `render()` ב־`main.js`: החוקים פועלים על Set/Map בנפרד מעדכון ה־DOM. הלוח הנוכחי כולל 600 תאים; מנוע ציור ללוח גדול יותר נשאר אפשרות עתידית.

קישורי השפה למעלה מחליפים את התיעוד, ולא מתרגמים את ממשק ההדגמה הקיים.

### יכולות

- לחיצה על תא מחייה אותו, ואפשר גם לצייר בגרירה על הלוח, בעכבר או באצבע.
- **Start / Pause**, **Step** (דור אחד), **Random** (רבע מהתאים חיים), **Clear** ומחוון **Speed**.
- מונים של הדור ושל התאים החיים. כשהכול מת, הסימולציה נעצרת מעצמה.
- הלוח סגור: רחפן שיוצא מימין חוזר משמאל.
- מתאים למסך טלפון: גודל התא תלוי ברוחב המסך.

### איך זה עובד

- התאים החיים נשמרים ב-`Set` של מפתחות `"שורה_עמודה"`.
- `nextGeneration(alive)` היא פונקציה טהורה: סופרת שכנים רק סביב תאים חיים ומפעילה את החוקים — תא מת עם שלושה שכנים נולד, תא חי עם שניים או שלושה שורד.
- רק תאים שהשתנו מצוירים מחדש.

### טכנולוגיות

HTML5 · CSS Grid · JavaScript (DOM, `Set`, `Map`, Pointer Events) · GitHub Pages

### הרצה מקומית

פתחו את `index.html` בדפדפן.

### שיפורים מתוכננים

אלה הצעות, לא יכולות שכבר מומשו.

- חזות: פלטת דפוסים קטנה והבחנה ברורה יותר בתאים חיים.
- הנדסה: חילוץ החוקים למודול הניתן לבדיקה, בדיקות קצה טורואידלי וביטול ציור; החלפת מנוע רק לאחר מדידה.
- יכולות: בחירת רחפן ופולסר, וייבוא/ייצוא של דפוס.

</div>

---

<a name="spanish"></a>

## Español

**El juego de la vida**

El «Juego de la vida» de Conway en el navegador: dibuje un patrón en un tablero de 30 × 20 y vea cómo vive según las reglas de Conway.

**Demo:** https://dubnovalexey.github.io/game-of-life-main/

### Recorrido rápido

Dibuje una línea de tres celdas y pulse Step para verla girar. Compare Random con Start/Pause, cambie Speed y limpie el tablero con Clear.

Mire `nextGeneration()` y `render()` en `main.js`: las reglas trabajan con Set/Map por separado de la actualización del DOM. Ahora el tablero tiene 600 celdas; otro motor de dibujo para una rejilla grande queda como opción de desarrollo.

Los enlaces de idioma de arriba cambian la documentación; no traducen la interfaz de la demo.

### Funciones

- Un clic da vida a una celda. También se puede dibujar arrastrando el ratón o el dedo por el tablero.
- **Start / Pause**, **Step** (una generación), **Random** (vive una de cada cuatro celdas), **Clear** y el control deslizante **Speed**.
- Contadores de generación y de celdas vivas. Si todo muere, la simulación se detiene sola.
- El tablero es cerrado: un planeador que sale por la derecha aparece por la izquierda.
- Cabe en la pantalla de un móvil: el tamaño de la celda depende del ancho de la pantalla.

### Cómo está hecho

- Las celdas vivas se guardan en un `Set` con claves `"fila_columna"`.
- `nextGeneration(alive)` es una función pura. Cuenta vecinos solo alrededor de las celdas vivas (contadores en un `Map`) y aplica las reglas: una celda muerta con tres vecinas nace; una viva con dos o tres sobrevive.
- Solo se vuelven a dibujar las celdas que cambian.
- Un único manejador para todo el tablero (delegación de eventos) en lugar de 600 separados.

### Tecnologías

HTML5 · CSS Grid · JavaScript (DOM, `Set`, `Map`, Pointer Events) · GitHub Pages

### Lo que aprendí

- Construir una rejilla a partir de datos en lugar de escribir cientos de `div` a mano.
- Separar las reglas (función pura) del dibujo.
- Elegir estructuras de datos por velocidad: `Set` para las celdas vivas, `Map` para contar vecinos.

### Cómo ejecutarlo

Abra `index.html` en el navegador.

### Plan de desarrollo

Son propuestas, no funciones ya implementadas.

- Visual: añadir una pequeña paleta de patrones y resaltar mejor las celdas vivas.
- Ingeniería: llevar las reglas puras a un módulo que se pueda probar directamente, fijar pruebas del borde toroidal y de la cancelación del dibujo; justificar cualquier cambio de motor de dibujo con mediciones.
- Funciones: elegir planeador/púlsar e importar/exportar patrones.

---

<a name="french"></a>

## Français

**Le jeu de la vie**

Le « Jeu de la vie » de Conway dans le navigateur : dessinez un motif sur une grille de 30 × 20 et regardez-le vivre selon les règles de Conway.

**Démo :** https://dubnovalexey.github.io/game-of-life-main/

### Visite rapide

Dessinez une ligne de trois cellules et appuyez sur Step pour la voir pivoter. Comparez Random et Start/Pause, changez Speed et videz la grille avec Clear.

Regardez `nextGeneration()` et `render()` dans `main.js` : les règles travaillent avec Set/Map, séparément de la mise à jour du DOM. La grille compte aujourd'hui 600 cellules ; un autre moteur de rendu pour une grande grille reste une piste d'évolution.

Les liens de langue ci-dessus changent la documentation ; ils ne traduisent pas l'interface de la démo.

### Fonctions

- Un clic donne vie à une cellule. On peut aussi dessiner en glissant la souris ou le doigt sur la grille.
- **Start / Pause**, **Step** (une génération), **Random** (une cellule sur quatre vivante), **Clear** et le curseur **Speed**.
- Compteurs de génération et de cellules vivantes. Si tout meurt, la simulation s'arrête d'elle-même.
- La grille est refermée sur elle-même : un planeur qui sort à droite réapparaît à gauche.
- Tient sur un écran de téléphone : la taille de la cellule dépend de la largeur de l'écran.

### Comment c'est fait

- Les cellules vivantes sont stockées dans un `Set` avec des clés `"ligne_colonne"`.
- `nextGeneration(alive)` est une fonction pure. Elle ne compte les voisins qu'autour des cellules vivantes (compteurs dans une `Map`) et applique les règles : une cellule morte avec trois voisines naît, une vivante avec deux ou trois survit.
- Seules les cellules qui changent sont redessinées.
- Un seul gestionnaire pour toute la grille (délégation d'événements) au lieu de 600 séparés.

### Technologies

HTML5 · CSS Grid · JavaScript (DOM, `Set`, `Map`, Pointer Events) · GitHub Pages

### Ce que j'ai appris

- Construire une grille à partir des données au lieu d'écrire des centaines de `div` à la main.
- Séparer les règles (fonction pure) du dessin.
- Choisir les structures de données pour la vitesse : `Set` pour les cellules vivantes, `Map` pour compter les voisins.

### Lancer le projet

Ouvrez `index.html` dans le navigateur.

### Pistes d'évolution

Ce sont des propositions, pas des fonctions déjà réalisées.

- Visuel : ajouter une petite palette de motifs et mieux faire ressortir les cellules vivantes.
- Ingénierie : sortir les règles pures dans un module testable directement, fixer des tests du bord torique et de l'annulation du dessin ; justifier tout changement de moteur de rendu par des mesures.
- Fonctions : choix planeur/pulsar et import/export de motifs.
