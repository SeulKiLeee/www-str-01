'use client';

import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry';
import Layout from '@/components/layout/Layout';
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Layout mainNavigationBar={true}>
            {children}
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
