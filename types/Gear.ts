import ItemList from "./ItemList";

export default interface Gear {
    artifact_traits: 0
    corruption: Array<any>
    item_level_equipped: number,
    item_level_total: number,
    items: ItemList
}