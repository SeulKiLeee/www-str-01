
import { styled } from 'styled-components';

interface IProps {
    backgroundcolor?: string;
    bordercolor?: string;
    borderradius?: number;
    width?: string;
    height?: string;
    children: React.ReactNode;
}


const CardSection = ( props:IProps ): JSX.Element => {
    const { backgroundcolor, bordercolor, borderradius, width, height, children } = props;
    return (
        <>
            <CardSectionWrapper
                width={width}
                height={height}
                backgroundcolor={backgroundcolor}
                bordercolor={bordercolor}
                borderradius={borderradius}
            >
                    { children }
            </CardSectionWrapper>
        </>
    )
}

export default CardSection;


const CardSectionWrapper = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    max-width: 1200px;
    min-height: 100px;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    background-color: ${props => props.backgroundcolor || '#fff'};
    border: 1px solid ${props => props.bordercolor || '#000'};
    border-radius: ${props => props.borderradius || 12}px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    padding: 20px 20px 24px;
    // box-shadow: 1px 4px 10px 2px #e5e5e5;
}
`;