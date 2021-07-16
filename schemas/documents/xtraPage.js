export default {
  name: "xtraPage",
  title: "Extra Page",
  type: "document",
  // __experimental_actions: ["update", "publish"],

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    }
  ],
};
