export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "projectsImages",
      title: "Projects Images",
      description: "Images will be shown in order.",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
};
