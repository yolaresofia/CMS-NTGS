export default {
  name: "meetTheSpeakers",
  title: "Meet The Speakers",
  type: "document",
  // __experimental_actions: ["update", "publish"],

  fields: [
    {
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Speakers",
      name: "speakers",
      type: "array",
      of: [
        {
          name: "speaker",
          title: "Speaker",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
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
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "bio",
              title: "Bio",
              type: "array",
              of: [
                {
                  title: "Block",
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "name",
              media: "image",
            },
          },
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
