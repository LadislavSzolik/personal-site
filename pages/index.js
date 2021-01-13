import Layout from '@/components/Layout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Layout>
        
          <article className="prose prose-blue sm:prose-lg ">
            <h1 >Hi, I am Ladislav</h1>

            <div className="max-w-2xl text-gray-600 ">
              <p >A designer and software engineer from Slovakia, currently living in Switzerland.</p>
              <p >I created this site to document and showcase <Link href="/projects"><a>my work</a></Link>. They are more less about digital design, software development and illustrations. </p>
              <p >Apart from that you can find <Link href="/articles"><a>articles</a></Link>, where I share my learnings and thoughts about the tech industry.</p>
              <p><Link href="/journal" ><a>In my journal</a></Link> you can read about certain events which shaped my personal and profession life.</p>
              <p >And lastly, I created a <Link href="/uses"><a>uses</a></Link> page, inspired by many fellow developers to show you what software, gadgets and serives I use for my work. </p>
            </div>
                      
          </article>

    </Layout>
  )
}
