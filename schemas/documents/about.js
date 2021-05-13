export default {
    name: 'omoss',
    title: 'Om Oss',
    type: 'document',
    // __experimental_actions: ["update", "publish"],

    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },{
            title: "About",
            name: "aboutInfo",
            type: "array",
            of: [
              {
                type: "block",
              },
            ],
          },
    ]
}
