import BottomNavigator from '@/components/layout/BottomNavigator'
import MainHeader from '@/components/layout/MainHeader'


export default function HealthPageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <MainHeader
          isShow={true}
          showBackButton={false}
        />
      {children}
      <BottomNavigator isShow={true}/>
    </>
  );
}