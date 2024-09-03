import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  console.log(actions);
  const { createPage } = actions;
  const sectionTemplate = path.resolve(__dirname, "src/templates/section.tsx");

  const { data } = await graphql<Queries.AllCoursesQuery>(`
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
