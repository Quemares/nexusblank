export const preloadHandlebarsTemplates = async function () {
    return loadTemplates([
      // Actor partials.

      // Item partials
      'systems/nexusblank/templates/partials/advantage-card.hbs',
    ]);
  };