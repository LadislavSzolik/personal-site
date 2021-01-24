import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import SingleItemLayout from '@/layouts/SingleItem';


export default function Journal({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
      components: [],
    });
  
    return <SingleItemLayout frontMatter={frontMatter}>{content}</SingleItemLayout>;
  }
  
  export async function getStaticPaths() {
    const journal = await getFiles('journal');
  
    return {
      paths: journal.map((p) => ({
        params: {
          slug: p.replace(/\.mdx/, '')
        }
      })),
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    const journal = await getFileBySlug('journal', params.slug);
  
    return { props: journal };
  }