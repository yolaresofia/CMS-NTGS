export default {
  name: "miscPage",
  title: "MiscPage",
  type: "document",
  // __experimental_actions: ["update", "publish"],

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    }
  ],
};
