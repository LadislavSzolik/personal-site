import Layout from '@/layouts/BaseLayout'

export default function ProjectLayout({children, frontMatter}) {
  return (
    <Layout>      
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="prose sm:prose-lg">
          <h1>{frontMatter.title}</h1>      
          </div>
          {children}          
        </div>
    </Layout>
  )
}