export class NexusItemSheet extends ItemSheet {
    get template() {
        return `systems/nexusblank/templates/sheets/${this.item.type}-sheet.html`;
    }
}