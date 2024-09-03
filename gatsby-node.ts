import type { GatsbyNode } from "gatsby";
import path from "path";


export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  const sectionTemplate = path.resolve("src/templates/section.tsx");

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

  console.log(data);

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
