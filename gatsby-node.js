import fetch from 'isomorphic-fetch';
import path from 'path';

export async function turnBlogCateogriesIntoPages({ graphql, actions }) {
  // TODO - Get template
  const template = path.resolve('./src/pages/blogs.js');
  // TODO - Query all the blogs
  const { data } = await graphql(`
    query {
      category: allSanityBlogCategory {
        nodes {
          id
          title
        }
      }
    }
  `);
  // TODO - Create a page for that blog
  const Category = data.category.nodes;
  Category.forEach((cat) => {
    console.log(`creating pages for ${cat.title}`);
    actions.createPage({
      path: `blogs/${cat.title}`,
      component: template,
      context: {
        title: cat.title,
        categoryRegex: `/${cat.title}/i`,
      },
    });
  });
  // TODO - Pass that data onwards towards the page
}

export async function turnProjectsCategoriesIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/pages/case-studies.js');
  const { data } = await graphql(
    `
      query {
        allSanityProjectCategory {
          nodes {
            id
            title
          }
        }
      }
    `
  );
  const projectCategory = data.allSanityProjectCategory.nodes;
  projectCategory.forEach((project) => {
    console.log(`creating page for ${project.title}`);
    actions.createPage({
      path: `/case-studies/${project.title}`,
      component: template,
      context: {
        title: project.title,
        projectCategoryRegex: `/${project.title}/i`,
      },
    });
  });
}

export async function turnBlogsIntoPages({ graphql, actions }) {
  // TODO Get template of blog
  const template = path.resolve('./src/templates/Blog.js');
  // TODO Query all the blogs
  const { data } = await graphql(`
    query {
      blogs: allSanityPost {
        nodes {
          categories {
            title
          }
          slug {
            current
          }
          title
        }
      }
    }
  `);
  const Blogs = data.blogs.nodes;
  // TODO call the create page fuction
  Blogs.forEach((blog) => {
    console.log(`creating page for ${blog.title}`);
    actions.createPage({
      path: `/blogs/${blog.slug.current}`,
      component: template,
      context: {
        title: blog.title,
        slug: blog.slug.current,
        category: blog.categories[0].title,
      },
    });
  });
  // TODO pass the page context onto the page
}

export async function createPages(params) {
  //* Create pages dynamically
  await Promise.all([turnBlogCateogriesIntoPages(params)]);
  await Promise.all([turnBlogsIntoPages(params)]);
  await Promise.all([turnProjectsCategoriesIntoPages(params)]);
}
