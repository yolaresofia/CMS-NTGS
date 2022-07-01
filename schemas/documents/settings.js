export default {
  name: "settings",
  title: "Settings",
  type: "document",
  // __experimental_actions: ["update", "publish"],

  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'showFilters',
      title: 'Show Filters',
      type: 'boolean',
    },
  ],
};
