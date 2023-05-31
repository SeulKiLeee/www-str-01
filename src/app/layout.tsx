import BottomNavigator from '@/components/layout/BottomNavigator'
import MainHeader from '@/components/layout/MainHeader'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <MainHeader
          isShow={true}
          showBackButton={false}
        />
        {children}
        <BottomNavigator isShow={true}/>
      </body>
    </html>
  )
}
