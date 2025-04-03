import { NexusItemSheet } from "./module/sheets/NexusItemSheet";

Hooks.once('init', function(){
    console.log("nexus | Initialising Nexus System");

    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('nexus', NexusItemSheet, {
      makeDefault: true,
      label: 'NEXUS.SheetLabels.Item',
    });
});