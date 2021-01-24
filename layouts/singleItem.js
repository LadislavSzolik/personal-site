import Layout from '@/layouts/BaseLayout'


export default function SingleItemLayout({children, frontMatter}) {
  return (
    <Layout>      
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="prose prose-blue sm:prose-lg">
          <h1>{frontMatter.title}</h1>
          <p className="text-gray-500">{`Ladislav Szolik / ${frontMatter.publishedAt}`}</p>
          {children}
          </div>
        </div>
    </Layout>
  )
}