import { nexus } from "./module/config.js";
import { NexusItemSheet } from "./module/sheets/item-sheet.mjs";
import { NexusPlayerSheet } from "./module/sheets/player-sheet.mjs";

Hooks.once('init', function(){
    console.log("nexus | Initialising Nexus System");

    CONFIG.nexus = nexus;

    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('nexus', NexusItemSheet, {
      makeDefault: true,
      label: 'NEXUS.SheetLabels.Item',
    });

    Actors.unregisterSheet('core', ItemSheet);
    Actors.registerSheet('nexus', NexusPlayerSheet, {
      makeDefault: true,
      label: 'NEXUS.SheetLabels.Player',
    });
});