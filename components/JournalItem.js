import Link from "next/link";
import { parseISO, format } from "date-fns";

const JournalItem = ({ title, summary, publishedAt, slug }) => {
  return (
    <div className="py-4 space-y-3">
      <Link href={`/journal/${slug}`}>
        <a>
          <h4 className="text-2xl font-bold text-gray-600 hover:text-black underline">{title}</h4>
        </a>
      </Link>
      <p className="text-gray-700 max-w-xl ">{summary} </p>
      <p className="text-gray-400">
        {format(parseISO(publishedAt), "MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default JournalItem;
