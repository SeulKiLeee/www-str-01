import BottomNavigator from '@/components/layout/BottomNavigator'
import MainHeader from '@/components/layout/MainHeader'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <MainHeader
            isShow={true}
            showBackButton={false}
          />
          {children}
          <BottomNavigator isShow={true}/>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
