import Layout from "@/layouts/BaseLayout";

export default function SingleItem({ children }) {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {children}
      </div>
    </Layout>
  );
}
