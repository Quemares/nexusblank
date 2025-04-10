export class NexusPlayerSheet extends ActorSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["nexus", "sheet", "actor", "player"]
        });
    }

    get template() {
        return `systems/nexusblank/templates/sheets/actors/player-sheet.hbs`;
    }

  /* -------------------------------------------- */

  /** @override */
  async getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData();

    // Use a safe clone of the actor data for further operations.
    const actorData = this.document.toObject(false);

    // Add the actor's data to context.data for easier access, as well as flags.
    context.system = actorData.system;
    context.flags = actorData.flags;

    // Adding a pointer to CONFIG.NEXUS
    context.config = CONFIG.nexus;

    // filter items owned by the character
    context.weapon = context.items.filter(function(item) {return item.type == "weapon"});
    context.armor = context.items.filter(function(item) {return item.type == "armor"});
    context.advantage = context.items.filter(function(item) {return item.type == "advantage"});
    context.implant = context.items.filter(function(item) {return item.type == "implant"});
    context.upgrade = context.items.filter(function(item) {return item.type == "upgrade"});

    // Prepare character data and items.
    /** if (actorData.type == 'commando' || actorData.type == "technologist" ) {
      this._prepareItems(context);
      this._prepareCharacterData(context);
    } */

    // Prepare NPC data and items.
    /** if (actorData.type == 'npc') {
      this._prepareItems(context);
    } */

    // Enrich biography info for display
    // Enrichment turns text like `[[/r 1d20]]` into buttons
    context.enrichedBiography = await TextEditor.enrichHTML(
      this.actor.system.biography,
      {
        // Whether to show secret blocks in the finished html
        secrets: this.document.isOwner,
        // Necessary in v11, can be removed in v12
        async: true,
        // Data to fill in for inline rolls
        rollData: this.actor.getRollData(),
        // Relative UUID resolution
        relativeTo: this.actor,
      }
    );

    context.enrichedConviction = await TextEditor.enrichHTML(
      this.actor.system.conviction,
      {
        // Whether to show secret blocks in the finished html
        secrets: this.document.isOwner,
        // Necessary in v11, can be removed in v12
        async: true,
        // Data to fill in for inline rolls
        rollData: this.actor.getRollData(),
        // Relative UUID resolution
        relativeTo: this.actor,
      }
    );

    context.enrichedInventory = await TextEditor.enrichHTML(
      this.actor.system.inventory,
      {
        // Whether to show secret blocks in the finished html
        secrets: this.document.isOwner,
        // Necessary in v11, can be removed in v12
        async: true,
        // Data to fill in for inline rolls
        rollData: this.actor.getRollData(),
        // Relative UUID resolution
        relativeTo: this.actor,
      }
    );

    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.isEditable) return;

  }
}