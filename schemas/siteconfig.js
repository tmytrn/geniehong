export default {
  name: "siteconfig",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      name: "description",
      type: "string",
      title: "Site Description",
    },
    {
      name: "previewImage",
      type: "image",
      title: "Preview Image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "backgroundImages",
      title: "Background Images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "cv",
      title: "CV",
      type: "file",
    },
    {
      name: "portfolioPassword",
      title: "Portfolio Password",
      type: "string",
    },

    // other fields
    // ...
  ],
};
