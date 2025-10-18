// Размеры игрового поля
const ROWS = 20;// Количество строк
const COLS = 30;// Количество столбцов

// Ссылка на контейнер сетки из index.html
const gridContainer = document.getElementById('grid');

// Массив для хранения координат живых клеток
// Координаты будем хранить как строки "строка_столбец"
let aliveCells = new Set();

//Генерирует и отображает сетку ROWS x COLS в DOM.
function createGrid() {
    // 1. Установка CSS-свойств для #grid
    // Нам нужно 30 столбцов, как указано в задании (30x20).
    gridContainer.style.gridTemplateColumns = `repeat(${COLS}, 20px)`;

    // 2. Создание ячеек сетки
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            // Задаем уникальный ID, чтобы клетку можно было легко найти
            cell.dataset.row = r;
            cell.dataset.col = c;

            // Добавляем обработчик клика для интерактивности
            // cell.addEventListener('click', handleCellClick);

            gridContainer.appendChild(cell);
        }
    }
}
// Обрабатывает клик по клетке: переключает состояние и обновляет массив живых клеток.

function handleCellClick(event) {
    const cell = event.target;

    //  Фильтр делегирования, НОВАЯ СТРОКА
    if (!cell.classList.contains('cell')) {
        return;
    }
    // Получаем координаты из data-атрибутов
    const r = cell.dataset.row;
    const c = cell.dataset.col;
    const key = `${r}_${c}`; // Создаем ключ для Set

    // Переключаем класс (визуальное обновление)
    cell.classList.toggle('alive');

    // Обновляем массив живых клеток (логика)
    if (cell.classList.contains('alive')) {
        aliveCells.add(key); // Если стала живой, добавляем в Set
    } else {
        aliveCells.delete(key); // Если стала мертвой, удаляем из Set

    }
}
// Добавляем глобальный обработчик кликов на контейнер сетки
gridContainer.addEventListener('click', handleCellClick);

    // DEBUG: Можно вывести aliveCells, чтобы проверить, что логика работает
    console.log(aliveCells);

    // Запуск приложения
    createGrid();


