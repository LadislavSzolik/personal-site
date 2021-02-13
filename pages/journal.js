import Layout from '../layouts/StandardWidthLayout';
import JournalItem from 'components/JournalItem';
import { getAllFilesFrontMatter } from '../lib/mdx';


export default function Journal({ journal }) {
  const filteredJournal = journal
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return (
    <Layout>
        <div>
          <div className="prose sm:prose-lg">
            <h1>Journal</h1>
            <p>I write about certain milestones and happenings in my life. It will be fun to read it later.</p>
          </div>       
          {!filteredJournal.length && 'Nothing published yet.'}  
          {filteredJournal.map((frontMatter) => (
            <JournalItem key={frontMatter.title} {...frontMatter} />
          ))}
        </div>

    </Layout>
  );
}

export async function getStaticProps() {
  const journal = await getAllFilesFrontMatter('journal');

  return { props: { journal } };
}