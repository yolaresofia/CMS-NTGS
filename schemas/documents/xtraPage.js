export default {
  name: "xtraPage",
  title: "Extra Page",
  type: "document",
  // __experimental_actions: ["update", "publish"],

  fields: [
    {
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Content Posts",
      name: "contentPosts",
      type: "array",
      of: [
        {
          name: "contentPost",
          title: "contentPost",
          type: "document",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: "author",
                maxLength: 96,
              },
            },
            {
              name: "color",
              title: "Color",
              type: "colorPicker",
            },
            {
              name: "author",
              title: "Author",
              type: "reference",
              to: { type: "author" },
            },
            {
              name: "mainImage",
              title: "Main image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "subcategory",
              title: "subcategory",
              type: "array",
              of: [{ type: "reference", to: { type: "subcategory" } }],
            },
            {
              name: "publishedAt",
              title: "Published at",
              type: "datetime",
            },
            {
              name: "body",
              title: "Body",
              type: "blockContent",
            },
          ],
        },
      ],
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
  ],
};
