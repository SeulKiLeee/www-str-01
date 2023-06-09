import Link from 'next/link';
import DetailSection from '@/components/elements/DetailSection';
import { styled } from 'styled-components';
import { Progress, Grid, Text, Button } from "@nextui-org/react";

const TotalActiveCalories = (): JSX.Element => {
    return (
        <>
            <TotalActiveCaloriesWrap>
                <DetailSection>
                    <SectionTitle>총 활동 칼로리</SectionTitle>
                    <CaloryGraphhWrap>
                        <CaloryBigText>476</CaloryBigText>
                        <CaloryText> / 500 kcal</CaloryText>
                        {/* <Button auto color="primary" rounded>
                         수정
                        </Button> */}
                        <CaloryGraph>
                            <Progress squared value={60} color="primary" size="sm" css={{background: '#000'}} />
                        </CaloryGraph>
                        <CaloryTable>
                            <Grid.Container gap={1}>
                                <Grid xs={6}>
                                    <Text>걷기</Text>
                                </Grid>
                                <Grid xs={3}>
                                    <Text>5686</Text>
                                    <Text>걸음</Text>
                                </Grid>
                                <Grid xs={3}>
                                    <Text>176</Text>
                                    <Text>kcal</Text>
                                </Grid>
                            </Grid.Container>
                            <Grid.Container gap={1}>
                                <Grid xs={6}>
                                    <Text>테니스</Text>
                                </Grid>
                                <Grid xs={3}>
                                    <Text>1</Text>
                                    <Text>시간</Text>
                                </Grid>
                                <Grid xs={3}>
                                    <Text>300</Text>
                                    <Text>kcal</Text>
                                </Grid>
                            </Grid.Container>
                        </CaloryTable>
                    </CaloryGraphhWrap>
                </DetailSection>
                <DetailSection>
                    <Grid.Container>
                        <Grid xs={8}>
                            <ContentText>
                                오늘 라면 한 그릇만큼의 칼로리를 소모했어요.
                            </ContentText>
                        </Grid>
                        <Grid xs={4}>
                            <ContentText>
                                 라면사진
                            </ContentText>
                        </Grid>
                    </Grid.Container>
                </DetailSection>
            </TotalActiveCaloriesWrap>
        </>
    )
}


export default TotalActiveCalories;

const TotalActiveCaloriesWrap = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #eee;
`;

const SectionTitle = styled.div`
    font-weight: 700;
    font-size: 0.9rem;
`;


const CaloryGraphhWrap = styled.div`
    padding: 1rem 0;
`;

const CaloryBigText = styled.span`
    font-weight: 700;
    font-size: 1.5rem;
`;

const CaloryText = styled.span`
    font-weight: 700;
`;

const CaloryGraph = styled.div`

`;

const CaloryTable = styled.div`
    margin-top: 1rem;
`;

const CaloryModifyButton = styled.button`
    text-align: right;
`;

const ContentText = styled.div`
    padding: 1rem;
`;