'use client';

import Layout from '@/components/layout/Layout';


export default function MainPageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout mainNavigationBar={true} hasTabBar={true}>
        {children}
      </Layout>
    </>
  );
}