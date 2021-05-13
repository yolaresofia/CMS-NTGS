export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    // __experimental_actions: ["update", "publish"],
    fields: [
        {
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
    ]
}
