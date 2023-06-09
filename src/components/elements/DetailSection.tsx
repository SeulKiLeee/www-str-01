
import { styled } from 'styled-components';

interface IProps {
    backgroundcolor?: string;
    bordercolor?: string;
    borderradius?: number;
    width?: string;
    height?: string;
    children: React.ReactNode;
}


const DetailSection = ( props:IProps ): JSX.Element => {
    const { backgroundcolor, bordercolor, borderradius, width, height, children } = props;
    return (
        <>
            <DetailSectionWrapper
                width={width}
                height={height}
                backgroundcolor={backgroundcolor}
                bordercolor={bordercolor}
                borderradius={borderradius}
            >
                    { children }
            </DetailSectionWrapper>
        </>
    )
}

export default DetailSection;


const DetailSectionWrapper = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    margin: 0 auto 1rem;
    max-width: 1200px;
    min-height: 100px;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    background-color: ${props => props.backgroundcolor || '#fff'};
    border: 1px solid ${props => props.bordercolor || 'none'};
    border-radius: ${props => props.borderradius || 0}px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    padding: 20px 20px 24px;
`;