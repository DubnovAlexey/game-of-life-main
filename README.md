# Game of Life

[English](#english) · [Русский](#russian) · [עברית](#hebrew)

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

- Visual: add a small pattern palette, clearer live-cell states and a glider favicon.
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

- Визуал: добавить небольшую палитру узоров, яснее выделить живые клетки и favicon планера.
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

- חזות: פלטת דפוסים קטנה, הבחנה ברורה יותר בתאים חיים וסמל רחפן.
- הנדסה: חילוץ החוקים למודול הניתן לבדיקה, בדיקות קצה טורואידלי וביטול ציור; החלפת מנוע רק לאחר מדידה.
- יכולות: בחירת רחפן ופולסר, וייבוא/ייצוא של דפוס.

</div>
