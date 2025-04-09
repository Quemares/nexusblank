export const preloadHandlebarsTemplates = async function () {
    return loadTemplates([
      // Actor partials.

      // Item partials
      'systems/nexusblank/templates/partials/advantage-card.hbs',
      'systems/nexusblank/templates/partials/implant-card.hbs',
      'systems/nexusblank/templates/partials/weapon-card.hbs',
      'systems/nexusblank/templates/partials/armor-card.hbs',
    ]);
  };