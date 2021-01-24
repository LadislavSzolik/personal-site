import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import SingleItem from '@/layouts/singleItem';


export default function Article({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
      components: [],
    });
    return <SingleItem frontMatter={frontMatter}>{content}</SingleItem>;
  }
  
  export async function getStaticPaths() {
    const articles = await getFiles('articles');
  
    return {
      paths: articles.map((p) => ({
        params: {
          slug: p.replace(/\.mdx/, '')
        }
      })),
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    const article = await getFileBySlug('articles', params.slug);
  
    return { props: article };
  }