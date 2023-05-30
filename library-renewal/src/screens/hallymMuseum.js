import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
.con-p{
  background-color: glay;
}
`;

function HallymMuseum() {
  return (
    <Container>
      <div className='container'>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="sub-container" style={{ padding: "20px" }}>
          <div className="lnb-wrap">
            <div className="lnb">
              <div className="lnb-title-box">
                <div>
                  <h1 style={{ textAlign: 'center' }}>한림대학교 박물관</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrap">
            <div className="content" id="jwxe_main_content">
              <div className="career-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div>
                  <img
                    style={{ width: '250px', height: '250px' }}
                    src="https://museum.hallym.ac.kr/_res/museum/img/intro/img-greeting01.gif"
                    alt=""
                    className="fr-fic fr-dii"
                  />
                  <img
                    style={{ width: '250px', height: '250px' }}
                    src="https://museum.hallym.ac.kr/_res/museum/img/inform/img-inform20201219.JPG"
                    alt=""
                    className="fr-fic fr-dii"
                  />
                </div>
                <div>
                  <img
                    style={{ width: '250px', height: '250px' }}
                    src="https://museum.hallym.ac.kr/_res/museum/img/05_%EC%95%BC%EC%99%B8%EC%A0%84%EC%8B%9C%EC%8B%A4.JPG"
                    alt=""
                    className="fr-fic fr-dii"
                  />
                  <img
                    style={{ width: '250px', height: '250px' }}
                    src="https://museum.hallym.ac.kr/_res/museum/img/04_%EB%AF%BC%EC%86%8D%EA%B3%B5%EC%98%88%EC%8B%A4.jpg"
                    alt=""
                    className="fr-fic fr-dii"
                  />
                </div>
              </div>
              <div className="content-box" style={{}}>

                <div className="con-box no-pd">
                  <p className="slo-p">
                    <h2 style={{ color: 'blue' }}>한림대학교 박물관은</h2>
                  </p>
                  <p >
                    선사와 역사시대의 유물과 민속품을 등을 수집 정리하고, 보전과 전시를 통해 학내 구성원 뿐 아니라 지역주민에게 역사 문화를 이해할 수 있는 장을 마련하고, 문화재에 대한 조사와 연구를 통해 우리 역사연구에 기여하고자 1988년 한림대학교 부속기관으로 개관하였습니다.<br /><br />
                    본 박물관은 제1전시실(고고역사실), 제2전시실(민속·공예실), 야외전시장 등을 갖추고 있습니다. 소장유물은 도ㆍ토기류, 고서화 등 1,700여 점을 비롯하여, 강원도 및 주변 지역에 대한 발굴조사에서 출토된 3,000여 점의 국가귀속유물을 보관 관리하고 있습니다.<br /><br />
                    대표적인 전시유물로는 우리박물관이 발굴조사 한 춘천 신매리와 천전리 유적, 양주 대모산성과 강화 외규장각지 유적 등지에서 출토된 선사시대부터 역사시대에 이르는 유물과 백제ㆍ신라ㆍ가야의 고대 토기류, 고려시대 자기류, 조선시대의 명기(明器)와 장롱 등 민속품이 있습니다.<br /><br />
                    우리 박물관은 상설전시와 학술강연회를 통해 역사에 관심 있는 본교 교직원 및 학생 그리고 지역주민에게 가까이 다가가는 박물관이 되기 위해 노력하고 있습니다. 또한 강원도 및 주변지역의 문화재 조사를 통해 강원지역의 문화재를 보호하고, 연구하는 강원지역의 향토문화개발 연구를 담당하는 중추기관으로서의 기능을 다하고 있습니다.<br /><br />
                  </p>
                </div>
              </div>
              <div style={{ color: 'gray' }}>
                <p className="con-p no-pd"><br /></p>
                <p className="con-p no-pd">
                  <strong>- 1종 박물관(종합) : 강원-대학11-2001-69호</strong>
                </p>
                <p className="con-p no-pd">
                  <strong>- 박물관 학예사 경력인정대상 기관</strong>
                </p>
                <p className="con-p no-pd">
                  <strong><strong>- 2022년 1차&nbsp;</strong>교육부 교육기부 진로체험 인증기관 : 4719(2022.06.10~2025.06.09)</strong>
                </p>
                <p className="con-p no-pd"><br /></p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
        <div className="space-for-nav" style={{ height: "4rem" }}></div>
      </div>
    </Container>
  );
}

export default HallymMuseum;

