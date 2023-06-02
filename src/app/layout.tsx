'use client';

import BottomNavigator from '@/components/layout/BottomNavigator'
import MainHeader from '@/components/layout/MainHeader'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry';
import { useMainHeaderStore } from '@/stores/layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isShow, showBackButton } = useMainHeaderStore();
  
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <MainHeader
            isShow={isShow}
            showBackButton={showBackButton}
          />
          {children}
          <BottomNavigator isShow={true}/>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
