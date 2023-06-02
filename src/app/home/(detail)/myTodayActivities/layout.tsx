'use client';

import { useMainHeaderStore } from '@/stores/layout';
import { useEffect } from 'react';

export default function HomeDetailPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {hideMainHeader} = useMainHeaderStore();
  
  useEffect(() => {
    hideMainHeader();
  }, []);
  
  return (
    <>
      {children}
    </>
  );
}