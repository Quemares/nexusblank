export default class NexusItemSheet extends ItemSheet {
    get template() {
        return `systems/nexusblank/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}