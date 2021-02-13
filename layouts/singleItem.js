import Layout from "@/layouts/StandardWidthLayout";

export default function SingleItem({ children, frontMatter }) {
  return (
    <Layout>
      <div className="prose prose-blue sm:prose-lg">
        <h1>{frontMatter.title}</h1>
        <p className="text-gray-500">{`Ladislav Szolik / ${frontMatter.publishedAt}`}</p>
        {children}
      </div>
    </Layout>
  );
}
