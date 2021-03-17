export default {
    name: 'archives',
    title: 'Archives',
    type: 'document',
    // __experimental_actions: ["update", "publish"],

    fields: [
        {
            title: 'Video Background',
            name: 'video',
            type: 'file',
            options: {
                accept: 'video/*'
            },
        },{
            title: 'Text',
            name: 'text',
            type: 'string',
        },{
            title: "About",
            name: "about",
            type: "array",
            of: [
              {
                type: "block",
              },
            ],
          },
        {
            title: 'Logo',
            name: 'logo',
            type: 'image',
        }
    ]
}
