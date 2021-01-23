import Layout from '@/components/Layout'


export default function UsesLayout({children}) {
  return (
    <Layout>      
        <div className="max-w-6xl mx-auto px-2 sm:px-8 mt-4 prose  sm:prose-lg">
        {children}
        </div>
    </Layout>
  )
}