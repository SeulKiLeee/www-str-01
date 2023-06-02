import CardSection from '@/components/elements/CardSection';
import Link from 'next/link';

const MyTodayActivitiesCard = (): JSX.Element => {
    return (
        <>
            <Link href='/home/my-activity'>
                <CardSection 
                    bordercolor='#000000'
                    borderradius={10}
                >
                    <p>나의 오늘 활동</p>
                </CardSection>
            </Link>
        </>
    )
}


export default MyTodayActivitiesCard;