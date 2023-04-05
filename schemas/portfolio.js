export default {
  name: "portfolio",
  type: "document",
  title: "Portfolio",
  fields: [
    {
      name: "portfolioImages",
      title: "Porfolio Images",
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
