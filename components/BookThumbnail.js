import Image from "next/image";

const BookThumbnail = ({ title, author, url }) => {
  return (
    <div >
      <div className="w-28">
        <Image
          alt={title}          
          width={230}
          height={398}
          src={`/books/${url}`}
        />
      </div>
      <p className="font-medium text-base text-gray-700"> {title} <span className="block pt-2 font-normal uppercase text-sm text-gray-400">{author}</span></p>
      
    </div>
  );
};

export default BookThumbnail;
