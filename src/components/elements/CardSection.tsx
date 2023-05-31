import styles from '@/styles/cardSection.module.css';

interface PropsI {
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    children: React.ReactNode;
}


const CardSection = ( props:PropsI ): JSX.Element => {
    const {backgroundColor, borderColor, borderRadius, children} = props;
    return (
        <>
            <div 
                className={styles.cardSection}
                style={{ backgroundColor, borderColor, borderRadius}}>
                    { children }
            </div>
        </>
    )
}

export default CardSection;