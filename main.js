// Размеры игрового поля
const ROWS = 20;// Количество строк
const COLS = 30;// Количество столбцов

// Ссылка на контейнер сетки из index.html
const gridContainer = document.getElementById('grid');

// Живые клетки храним в Set, координаты — строкой "строка_столбец"
let aliveCells = new Set();

// Состояние симуляции
let generation = 0;   // номер поколения
let timerId = null;   // id таймера, null — симуляция стоит
let isPainting = false; // зажата ли кнопка мыши (рисование протягиванием)
let paintAlive = true;  // что рисуем протягиванием: живые или мёртвые клетки

// Все клетки DOM по ключу — чтобы обновлять экран без поиска по документу
const cellsByKey = new Map();

const keyOf = (r, c) => `${r}_${c}`;

//Генерирует и отображает сетку ROWS x COLS в DOM.
function createGrid() {
    // Ширина клетки задаётся в CSS переменной --cell, чтобы поле помещалось и на телефоне
    gridContainer.style.gridTemplateColumns = `repeat(${COLS}, var(--cell))`;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            // Задаем координаты, чтобы клетку можно было легко найти
            cell.dataset.row = r;
            cell.dataset.col = c;

            cellsByKey.set(keyOf(r, c), cell);
            gridContainer.appendChild(cell);
        }
    }
}

// Правила Конвея. Чистая функция: получает Set живых клеток, возвращает новый Set.
// Поле замкнуто в тор: клетка у правого края соседствует с клеткой у левого.
function nextGeneration(alive, rows = ROWS, cols = COLS) {
    // Считаем живых соседей только у клеток рядом с живыми — остальные точно останутся мёртвыми
    const neighbours = new Map();
    for (const key of alive) {
        const [r, c] = key.split('_').map(Number);
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const n = keyOf((r + dr + rows) % rows, (c + dc + cols) % cols);
                neighbours.set(n, (neighbours.get(n) || 0) + 1);
            }
        }
    }

    const next = new Set();
    for (const [key, count] of neighbours) {
        // Рождение: ровно 3 соседа. Выживание: 2 или 3 соседа у живой клетки.
        if (count === 3 || (count === 2 && alive.has(key))) {
            next.add(key);
        }
    }
    return next;
}

// Перерисовывает только те клетки, которые поменялись
function render(previous, current) {
    for (const key of previous) {
        if (!current.has(key)) cellsByKey.get(key).classList.remove('alive');
    }
    for (const key of current) {
        if (!previous.has(key)) cellsByKey.get(key).classList.add('alive');
    }
    document.getElementById('generation').textContent = generation;
    document.getElementById('population').textContent = current.size;
}

function setCells(newCells) {
    const previous = aliveCells;
    aliveCells = newCells;
    render(previous, aliveCells);
}

function step() {
    generation++;
    const next = nextGeneration(aliveCells);
    setCells(next);
    // Всё вымерло — останавливаемся сами
    if (next.size === 0) stop();
}

// Задержка между поколениями из ползунка: правее — быстрее
function delay() {
    const speed = Number(document.getElementById('speed').value); // 1..10
    return 1050 - speed * 100; // от 950 до 50 мс
}

function start() {
    if (timerId !== null || aliveCells.size === 0) return;
    timerId = setInterval(step, delay());
    document.getElementById('start').textContent = 'Pause';
}

function stop() {
    clearInterval(timerId);
    timerId = null;
    document.getElementById('start').textContent = 'Start';
}

function randomize() {
    const cells = new Set();
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (Math.random() < 0.25) cells.add(keyOf(r, c)); // четверть клеток живые
        }
    }
    generation = 0;
    setCells(cells);
}

function clearField() {
    stop();
    generation = 0;
    setCells(new Set());
}

// Обрабатывает нажатие на клетку: переключает её и запоминает, что рисовать протягиванием.
function handleCellPress(event) {
    const cell = event.target;

    // Фильтр делегирования: реагируем только на клетки
    if (!cell.classList.contains('cell')) {
        return;
    }
    event.preventDefault(); // чтобы протягивание не выделяло текст
    const key = keyOf(cell.dataset.row, cell.dataset.col);
    paintAlive = !aliveCells.has(key);
    isPainting = true;
    paintCell(key);
}

// Протягивание по полю с зажатой кнопкой рисует клетки того же цвета
function handleCellEnter(event) {
    if (!isPainting) return;
    const cell = document.elementFromPoint(event.clientX, event.clientY);
    if (cell && cell.classList.contains('cell')) {
        paintCell(keyOf(cell.dataset.row, cell.dataset.col));
    }
}

function paintCell(key) {
    const cells = new Set(aliveCells);
    if (paintAlive) cells.add(key); else cells.delete(key);
    setCells(cells);
}

// Один обработчик на всё поле (делегирование) вместо 600 отдельных
gridContainer.addEventListener('pointerdown', handleCellPress);
gridContainer.addEventListener('pointermove', handleCellEnter);
document.addEventListener('pointerup', () => { isPainting = false; });

document.getElementById('start').addEventListener('click', () => (timerId === null ? start() : stop()));
document.getElementById('step').addEventListener('click', () => { stop(); step(); });
document.getElementById('random').addEventListener('click', randomize);
document.getElementById('clear').addEventListener('click', clearField);
document.getElementById('speed').addEventListener('input', () => {
    // Новая скорость применяется сразу, если симуляция идёт
    if (timerId !== null) {
        stop();
        start();
    }
});

// Запуск приложения
createGrid();
render(new Set(), aliveCells);
