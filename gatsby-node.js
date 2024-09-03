const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const sectionTemplate = path.resolve(__dirname, "src/templates/section.tsx");

  const { data } = await graphql(`
    query AllCourses {
      allContentfulCourse {
        edges {
          node {
            title
            description
            sections {
              slug
            }
          }
        }
      }
    }
  `);

  if (data) {
    data?.allContentfulCourse.edges.forEach(({ node }) => {
      if (node?.sections) {
        node.sections.forEach((section) => {
          if (section) {
            createPage({
              component: sectionTemplate,
              path: `/${section.slug}`,
              context: {
                slug: section.slug,
              },
            });
          }
        });
      }
    });
  }
};
