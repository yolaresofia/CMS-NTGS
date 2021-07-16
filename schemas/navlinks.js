export default {
    name: "navlinks",
    title: "Navigation Links",
    type: "document",
    __experimental_actions: ["update", "publish", "create", "delete"],
  
    fields: [
    
      {
        title: "Blocks",
        name: "blocks",
        type: "array",
        of: [
            {
                type: "reference",
                name:"xtrapage",
                to: [
                  {
                    type: "xtraPage",
                  },
                ]
              }
        ],
      },
    ],
  };
  