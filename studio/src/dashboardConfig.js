export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6366ea9f73e5ca50cfa4f4eb",
                  title: "Sanity Studio",
                  name: "korean-project-sanity-studio",
                  apiId: "b3550f8c-5aa8-490d-87e5-52ed835ed4e7",
                },
                {
                  buildHookId: "6366ea9f6084a04e052a0139",
                  title: "Blog Website",
                  name: "korean-project-sanity",
                  apiId: "37b6c3c3-c46c-49de-a13b-daee87d7cf0c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/awareMWI/korean-project-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://korean-project-sanity.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
