import event from "../objects/event";

export default {
  name: "fullProgramme",
  title: "fullProgramme",
  type: "document",
  // __experimental_actions: ["update", "publish"],

  fields: [
   
    {
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Events",
      name: "events",
      type: "array",
      of: [
        {
          name: "event",
          title: "Event",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
                name: 'start',
                title: 'Start',
                type: 'datetime',
              },
            {
              name: "body",
              title: "Body",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      title: "Events Image",
      name: "eventsImage",
      type: "image",
    },
  ],
};
