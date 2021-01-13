import Layout from '../components/Layout';
import ArticleItem from '../components/ArticleItem';
import { getAllFilesFrontMatter } from '../lib/mdx';


export default function Projects({ projects }) {
  const filteredProjects = projects
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return (
    <Layout>
        <div className="prose sm:prose-lg">
          <h1>Projects</h1>
        </div>

        <div className="my-4">
          {!filteredProjects.length && 'Nothing published yet.'}
        </div>

        {filteredProjects.map((frontMatter) => (
          <ArticleItem key={frontMatter.title} {...frontMatter} />
        ))}

    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects');

  return { props: { projects } };
}