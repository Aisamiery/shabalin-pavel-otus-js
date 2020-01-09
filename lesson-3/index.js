/**
 * Created by PhpStorm on 09.01.2020.
 * Author: Shabalin Pavel
 * Email: aisamiery@gmail.com
 */

/**
 * Функция возвращает строку селектора
 *
 * @param element DOMElement для поиска
 * @param string строка селекторов для рекурсии
 * @return string
 */
function getPath(element, string) {
    if (!element instanceof HTMLElement) {
        throw new Error('Передан неверный тип');
    }

    string = string ? (' > ' + string) : '';

    // Соберем по элемент
    let classes = element.className.trim().split(' '); // Соберем по классам
    let tag = element.tagName.toLowerCase();
    let id = element.id;

    let selector = tag;

    if (id) {
        selector += '#'+id;
    }

    if (classes.length > 0 && classes[0] !== '') {
        selector += '.' + classes.join('.');
    }

    let parent = element.parentNode;

    // доведем путь от body
    if (element instanceof HTMLBodyElement) {
        return selector + string;
    }

    // Если уже находится только 1 элемент, возвращаем строку
    if (document.querySelectorAll(selector + string).length < 2) {
        return selector + string;
    }

    // найдем порядковый номер среди списка таких же элементов у родителя
    let elems = parent.querySelectorAll(selector);
    if (elems.length > 1) {
        let index = [].indexOf.call(elems, element);
        selector += index === 0 ? ':first-child' : `:nth-child(${index + 1})`;
    }

    return getPath(parent, selector + string);
}