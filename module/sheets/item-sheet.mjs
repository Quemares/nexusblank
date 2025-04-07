export class NexusItemSheet extends ItemSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["nexus", "sheet", "item"]
        });
    }

    get template() {
        return `systems/nexusblank/templates/sheets/items/${this.item.type}-sheet.hbs`;
    }

    async getData() {
        // Retrieve base data structure.
        const context = super.getData();
    
        // Use a safe clone of the item data for further operations.
        const itemData = this.document.toObject(false);
    
        // Enrich description info for display
        // Enrichment turns text like `[[/r 1d20]]` into buttons
        context.enrichedDescription = await TextEditor.enrichHTML(
          this.item.system.description,
          {
            // Whether to show secret blocks in the finished html
            secrets: this.document.isOwner,
            // Necessary in v11, can be removed in v12
            async: true,
            // Data to fill in for inline rolls
            rollData: this.item.getRollData(),
            // Relative UUID resolution
            relativeTo: this.item,
          }
        );
    
        // Add the item's data to context.data for easier access, as well as flags.
        context.system = itemData.system;
        context.flags = itemData.flags;
    
        // Adding a pointer to CONFIG.NEXUS
        context.config = CONFIG.nexus;
    
        return context;
      }

      activateListeners(html) {
        super.activateListeners(html);
    
        // Everything below here is only needed if the sheet is editable
        if (!this.isEditable) return;

      }
}