import Link from 'next/link'

const ProjectItem = ({ title, summary, slug }) => {
    return (
        <Link href={`/projects/${slug}`}>
            <a className="m-16">
                <h4 className="text-2xl font-bold" >{title}</h4>
                <p className="text-gray-700 max-w-xl ">{summary}</p>                
            </a>
        </Link>
    );
};

export default ProjectItem;