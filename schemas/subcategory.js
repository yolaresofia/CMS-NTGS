export default {
    type: "document",
    name: "subcategory",
    title: "subCategory",
    fields: [
     
      {
        name: "id",
        title: "id",
        type: "string",
      },{
        name: "slug",
        title: "slug",
        type: 'slug',
        options: {
          source: 'id',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }
    ],
  }
  