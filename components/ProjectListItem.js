import Link from 'next/link'

const ProjectItem = ({ title, summary, slug }) => {
    return (
        <>
        <Link href={`/projects/${slug}`}>
            <a>
                <h4 className="text-2xl font-bold text-gray-600 hover:text-black underline" >{title}</h4>               
            </a>            
        </Link>
        <p className="text-gray-600 pt-3">{summary}</p>   
        </>
    );
};

export default ProjectItem;