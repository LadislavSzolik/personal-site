import Layout from '../components/Layout';
import ArticleItem from '../components/ArticleItem';
import { getAllFilesFrontMatter } from '../lib/mdx';


export default function Articles({ articles }) {
  const filteredArticles = articles
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return (
    <Layout>
      
        <div className="prose sm:prose-lg">
          <h1>Articles</h1>
        </div>
        

        {!filteredArticles.length && 'No articles found.'}

        {filteredArticles.map((frontMatter) => (
          <ArticleItem key={frontMatter.title} {...frontMatter} />
        ))}

      
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = await getAllFilesFrontMatter('articles');

  return { props: { articles } };
}