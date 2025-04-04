export class NexusItemSheet extends ItemSheet {
    get template() {
        return `systems/nexusblank/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();

        data.config = CONFIG.nexus;

        return data;
    }
}