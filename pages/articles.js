import Layout from "../layouts/BaseLayout";
import ArticleItem from "../components/ArticleItem";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Articles({ articles }) {
  const filteredArticles = articles.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="prose sm:prose-lg">
          <h1>Articles</h1>
          <p>I've learned some interesting lessons on the way. In my articles I captured the ones which I believe stay relevant for some time and share them with you.</p>
        </div>
        {!filteredArticles.length && "No articles found."}
        {filteredArticles.map((frontMatter) => (
          <ArticleItem key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = await getAllFilesFrontMatter("articles");

  return { props: { articles } };
}
