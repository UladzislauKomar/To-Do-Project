import ToDo from "../models/ToDo";

export function getItems() : ToDo[] {
    const itemsJson = sessionStorage.getItem("todos");

    return (itemsJson) ? (JSON.parse(itemsJson) as ToDo[]) : [];
}

export function addItem(item: ToDo) : ToDo[] {
    const items = getItems();
    items.push(item);
    sessionStorage.setItem("todos", JSON.stringify(items));

    return items;
}

export function removeItem(id: string) : ToDo[] {
    const items = getItems().filter(item => item.id !== id);
    sessionStorage.setItem("todos", JSON.stringify(items));

    return items;
}