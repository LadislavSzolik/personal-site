import Link from 'next/link'
import { parseISO, format } from 'date-fns'


const ProjectItem = ({ title, summary, publishedAt, slug }) => {
    return (
        <Link href={`/projects/${slug}`}>
            <a className="m-16">
                <h4 className="text-2xl font-bold" >{title}</h4>
                <p className="text-gray-700 max-w-xl ">{summary} </p>
                <p className="text-gray-400">
                {format(parseISO(publishedAt), 'MMMM dd, yyyy')}</p>
            </a>
        </Link>
    );
};

export default ProjectItem;