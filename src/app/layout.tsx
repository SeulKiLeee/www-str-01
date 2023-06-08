'use client';

import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry';
import { NextUIProvider } from '@nextui-org/react';
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
          <NextUIProvider>
            <Layout mainNavigationBar={true}>
              {children}
            </Layout>
          </NextUIProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
