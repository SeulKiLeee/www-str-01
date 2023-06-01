
import { styled } from 'styled-components';

interface PropsI {
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    width?: string;
    height?: string;
    children: React.ReactNode;
}


const CardSection = ( props:PropsI ): JSX.Element => {
    const { backgroundColor, borderColor, borderRadius, width, height, children } = props;
    return (
        <>
            <CardSectionWrapper
                width={width}
                height={height}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                borderRadius={borderRadius}
            >
                    { children }
            </CardSectionWrapper>
        </>
    )
}

export default CardSection;

const CardSectionWrapper = styled.div<PropsI>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    padding: 0 1rem;
    max-width: 1200px;
    min-height: 100px;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    background-color: ${props => props.backgroundColor || '#fff'};
    border: 1px solid ${props => props.borderColor || '#000'};
    border-radius: ${props => props.borderRadius || 6}px;
    overflow: hidden;
    position: relative;
    z-index: 1;
`;