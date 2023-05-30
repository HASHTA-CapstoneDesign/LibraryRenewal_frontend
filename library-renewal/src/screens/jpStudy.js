import React from "react";
import styled from "styled-components";

const SubTitle = styled.div`
  height: 30px;
  width: 80px;
  border-bottom: 1px solid blue;
  margin-bottom: 10px;
  color: blue;
  font-size: 15px;
`

const SubTitleDiv = styled.div`
    height: 30px;
    width: inherit;
    border-bottom: 1px solid lightgray;
    margin-bottom: 10px;
`

const StyledDiv = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const OuterDiv = styled.div`
  margin: 20px;
`;

function JpStudy() {
  return (
    <div className='container'>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <OuterDiv>
        <Title>한림대 일본학 연구소</Title>
        <SubTitleDiv>
          <SubTitle>소장 인사말</SubTitle>
        </SubTitleDiv>
        <StyledDiv>
          이웃국가 일본에 대한 분석과 연구의 필요성은 강조되고 있었으나, 일본에 대한 기초적인 문헌조차도 열악했던 1994년에 개소한 한림대학교 일본학연구소는 국내 일본연구의 기초를 확립하는 데 공헌하겠다는 사명감을 가지고 활동을 시작했습니다.
        </StyledDiv>
        <StyledDiv>
          본 연구소가 주요사업으로 추진하는 것은 1) 일본학도서관, 2) 출판사업, 3) 일본학 DB, 4) 연구의 네 가지입니다. 이들 사업의 궁극적인 목적은 모두 일본 관련 지(知)를 축적해서 사회와 학계에 발신하고 제공한다는 데에 있으며, 연구소라는 연구 집단이 수행해야 하는 책무라는 생각으로 임하고 있습니다.
        </StyledDiv>
        <StyledDiv>
          일본학 관련 일본어 전문서적 약 7만 점을 가진 일본학도서관은 한국도서관협회에 정식으로 등록된 일본학전문도서관이며, 연구소와 도서관을 접목하여 국내 일본연구의 특화와 인프라 구축이 그 목적입니다. 또한 본 연구소가 중심이 되어 추진해서 한림대학교 일송도서관이 기증받는 &lt;오에 시노부(大江志乃夫) 일본근대사문고&gt; 2만점을 비롯해서 한림대학교는 일본 관련 전문도서 10만점 이상을 가진 곳이라는 점도 국내 일본연구의 인프라 구축에 기여하고 있습니다.
        </StyledDiv>
        <StyledDiv>
          출판사업은 연구소 초기부터 역량을 집중한 사업이며, ‘사회사업의 일환’으로 인식하고 임하고 있습니다. &lt;한림일본학총서&gt; 100권 완간을 필두로, &lt;일본현대문학대표작선&gt;, &lt;한림일본학신총서&gt;, &lt;한림일본학자료총서&gt; 등 다양한 시리즈가 있으며, 일본학의 시야를 확장하려는 &lt;아시아를 생각하는 시리즈&gt;, 그리고 한국연구재단 등재지 󰡔翰林日本學󰡕까지 연구소 개소 이후 현재까지 출판실적은 약 200권에 이릅니다.
        </StyledDiv>
        <StyledDiv>
          일본학 DB는 일본학도서관과 연계해서 &lt;경성일보&gt;는 물론이고 &lt;아사히신문 외지판&gt;, &lt;마이니치신문 외지판&gt;, &lt;대만일일신보&gt;, &lt;대만민보&gt;, &lt;대련신문&gt;, &lt;대륙신보&gt;, &lt;상하이신보&gt; 등 제국일본 판도 하에서 간행된 일본어 신문과 1945년 이전과 GHQ시대의 오키나와에서 발행된 신문, 그리고 근대일본의 개화기 상황을 상세하게 전하는 &lt;요코하마마이니치신문&gt; 등 방대한 분량의 신문자료를 보유하고 있으며, 본 연구소에서는 &lt;요미우리신문&gt;과 &lt;아사히신문&gt;은 물론이고 메이지시대 이후의 법원 판례에 대한 DB검색도 가능합니다. 한편으로 본 연구소는 1915년부터 1945년까지 30년 동안 간행된 &lt;아사히신문 외지판&gt; 기사명색인DB 작업을 진행하고 있으며, 2023년 완성을 목표로 하고 있습니다.
        </StyledDiv>
        <StyledDiv>
          연구소의 본분인 연구는 ｢근대조선 지식인의 &lt;민족아&gt;형성에 관한 연구｣, ｢일본식민지통치의 종언과 대한민국 건국에 관한 조사연구｣ 등의 대표적인 연구가 있으나, 최근에는 한국연구재단 중점연구소사업 9년과 2024년에 종료되는 인문한국플러스사업 7년을 통해서 조그마한 연구소가 ‘문화권력’이라는 주제로 총 16년 동안 집중적으로 연구를 수행하고 있다는 사실로 본 연구소 연구에 대한 설명으로 갈음하고자 합니다.
        </StyledDiv>
        <StyledDiv>
          이처럼 한림대학교 일본학연구소는 연구소로서의 사회적 기능과 책임을 의식하면서도 학문적인 노력을 통한 ‘일본’연구를 기본 축으로 삼으며, 이는 궁극적으로는 ‘동아시아의 화해와 평화, 공존’을 위해 일익을 담당하려는 데에 있습니다. 여기에는 한국의 일본연구가 동아시아의 현실문제에 대해서 무엇을 할 수 있는가에 대한 물음이 있습니다.
        </StyledDiv>
        <StyledDiv>
          한림대학교 일본학연구소는 미력하나마 이러한 인식과 목표로 한국의 일본연구를 이끌어가는 일익을 담당하여 사회와 학계에 공헌하고자 합니다.
        </StyledDiv>
        <StyledDiv>
          <br />
          한림대학교 일본학연구소<br />
          3대 소장   서정완
        </StyledDiv>
      </OuterDiv>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
    </div>
  );
}

export default JpStudy;