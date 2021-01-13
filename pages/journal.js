import Layout from '../components/Layout';
import JournalItem from '../components/JournalItem';
import { getAllFilesFrontMatter } from '../lib/mdx';


export default function Journal({ journal }) {
  const filteredJournal = journal
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return (
    <Layout>
        <div className="prose sm:prose-lg">
          <h1>Journal</h1>
        </div>
       
        {!filteredJournal.length && 'Nothing published yet.'}
  
        {filteredJournal.map((frontMatter) => (
          <JournalItem key={frontMatter.title} {...frontMatter} />
        ))}

    </Layout>
  );
}

export async function getStaticProps() {
  const journal = await getAllFilesFrontMatter('journal');

  return { props: { journal } };
}