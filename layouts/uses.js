import Layout from '@/components/Layout'


export default function UsesLayout({children}) {
  return (
    <Layout>      
        <div className="max-w-5xl mx-auto px-4 sm:px-8 mt-4 prose prose-blue sm:prose-lg">
        {children}
        </div>
    </Layout>
  )
}