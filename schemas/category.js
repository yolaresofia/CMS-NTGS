export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "subcategory",
      title: "subcategory",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "subcategory",
            },
          ]
        },
      ],
    },
  ],
};
