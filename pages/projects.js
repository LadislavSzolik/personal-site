import Layout from '@/layouts/BaseLayout';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import ProjectListItem from '@/components/ProjectListItem';


export default function Projects({ projects }) {  
  const filteredProjects = projects
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return (
    <Layout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="prose sm:prose-lg">
            <h1>Projects</h1>
            <p>This is still under construction...takes time to create nice visuals 😉</p>
          </div>       
          {!filteredProjects.length && 'Nothing published yet.'}        
          {filteredProjects.map((frontMatter) => (
            <ProjectListItem key={frontMatter.title} {...frontMatter} />
          ))}   
        </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects');
  return { props: { projects } };
}