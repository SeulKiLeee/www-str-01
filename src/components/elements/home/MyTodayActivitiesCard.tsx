import CardSection from '@/components/elements/CardSection';

const MyTodayActivitiesCard = (): JSX.Element => {
    return (
        <>
            <CardSection 
                backgroundColor='#ffffff'
                borderColor='#000000' 
                borderRadius={10}
            >
                <p>나의 오늘 활동</p>
            </CardSection>
        </>
    )
}


export default MyTodayActivitiesCard;