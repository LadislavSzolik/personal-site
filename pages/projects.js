import Layout from '@/layouts/BaseLayout';
import { getAllFilesFrontMatter } from '@/lib/mdx';


export default function Projects({ projects }) {  

  return (
    <Layout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="prose sm:prose-lg">
            <h1>Projects</h1>
            <p>This is still under construction...takes time to create nice visuals 😉</p>
          </div>       
          {!projects.length && 'Nothing published yet.'}  
          
        </div>

    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects');
  return { props: { projects } };
}