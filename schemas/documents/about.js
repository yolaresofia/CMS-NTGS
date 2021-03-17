export default {
    name: 'about',
    title: 'About',
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
            name: "aboutInfo",
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
