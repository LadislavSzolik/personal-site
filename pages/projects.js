import Layout from '@/layouts/StandardWidthLayout';
import ProjectListItem from '@/components/ProjectListItem';
import {projects} from '../projects';


export default function Projects({ projects }) {  
  return (
    <Layout>        
          <div className="prose sm:prose-lg pb-5">
            <h1>Projects</h1>
            <p className="text-gray-500">List of side projects. They are about digital solutions or illustrations</p>
          </div>       
          {!projects.length && 'Nothing published yet.'}        
          {projects.map(project => (
            <ProjectListItem key={project.slug} {...project}></ProjectListItem>
          ))}           
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: projects.map(project =>({
        ...project,
        url: `${project.id}`
      })),
    },
  };
}