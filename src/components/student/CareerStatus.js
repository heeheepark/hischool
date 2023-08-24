import React from "react";
import {
  CareerStatusDiv,
  HopeCareerTable,
} from "../../styles/student/LifeRecordStyle";
import { useState } from "react";

const CareerStatus = () => {
  const example = [
    "밝고 활발하며 사교성이 좋음. 매사에 적극적이며 성격이 온순함. 긍정적이고 타인의 마음을 잘 이해함. 이루고자 하는 것이 있으면 많이 노력하며 도전적이고 목표가 뚜렷함. (배려) 어려운 일에 처한 사람을 보면 그냥 지나치지 못하는 면을 가지고 있으며 몸이 아픈 친구를 앞장 서서 도와주고, 고민을 가지고 있는 다른 친구들의 이야기를 귀 기울여 들어줌.",
    "(배려) 항상 은은한 미소를 머금고 생활하며 심성이 온화하고 부드러워서 주위 사람들을 편안하게 해줌. (타인존중) 성품이 착하고 예의가 바르며 자신의 주변 사람들을 아끼고 챙길 줄 알며 적극적인 태도로 학교 생활을 긍정적으로 해나감. 신중하고 든든하게 자신의 역할을 늘 잘해냄. 성실한 성격으로 어떤 일이든 맡겨 놓으면 믿음이 가는 학생으로 교실의 에어컨 필터 청소, 선풍기 청소 등 다른 학생들이 하기 싫어하는 일에도 솔선수범함. 자신의 맡은 일은 최선을 다해 끝까지 해냈고 환경봉사대 활동을 위해 다른 사람들보다 조금 일찍 등교하는 것을 생활화함. 사람에 대한 신뢰가 잘 형성되어 있어 친구를 사귈 때 그들의 장점을 발견하고 잘 지내려고 노력함. 발표 수업을 준비하는 과정을 지켜본 바, 포용력이 있어 자신과 다른 의견을 가진 친구들의 의견도 받아들일 줄 알며, 겸손함도 갖추고 있어 자신이 한 일에 대하여 자랑하거나 내세우지 않음. 친한 친구와 잘 어울리고 교우관계가 무던하고 좋음. 바른 인성이 갖추어져 있기 때문에 성실함과 끈기로 꾸준히 노력한다면 앞으로 무한한 발전가능성이 엿보이는 학생임.",
    "(인지적 특성) 자신이 하고자 마음먹은 일에 대해서는 꼼꼼하게 스스로 계획을 세워 철저한 자기관리를 통해 성취해내는 목표 지향적이고 성실한 학생임. 다른 사람들의 고민을 들어주고 이에 공감하는 능력이 뛰어나며, 친구들에게 어려운 일이 있으면 선뜻 나서서 도와주고 해결해주고 싶어하며, 실제로도 많은 도움을 주고 있음. 자신이 할 수 있는 일은 최선을 다해서 묵묵히 하는 학생이며, 청소 시간에는 항상 솔선해서 적극적으로 참여하여 급우들이 깨끗한 환경에서 작업에 열중할 수 있도록 하고 자신의 진로에 관련된 준비를 꾸준히 하고 있음.",
  ];
  const [significant, setSignificant] = useState(example);

  return (
    <CareerStatusDiv>
      <div className="top-wrap">
        <div className="hope-univ-wrap">
          <h4>희망 대학</h4>
          <label htmlFor="" className="label-nm">
            <span>대학명</span>
            <input type="text" value={"경북대학교"} readOnly />
          </label>
          <label htmlFor="" className="label-nm">
            <span>학과</span>
            <input type="text" value={"신문방송학과"} readOnly />
          </label>
        </div>
        <div className="hope-career-wrap">
          <h4>진로 희망 사항</h4>
          <HopeCareerTable>
            <ul>
              <li className="cate-list">
                <ul>
                  <li className="category-nm">학년</li>
                  <li className="category-nm">특기 또는 흥미</li>
                  <li className="category-nm">진로희망</li>
                  <li className="category-detail">학생</li>
                  <li className="category-detail">학부모</li>
                </ul>
              </li>
              <li className="career-list">
                <ul>
                  <li>1학년</li>
                  <li>음악감상</li>
                  <li>아이돌</li>
                  <li>교사</li>
                </ul>
              </li>
              <li className="career-list">
                <ul>
                  <li>2학년</li>
                  <li>독서</li>
                  <li>언어학자</li>
                  <li>교사</li>
                </ul>
              </li>
              <li className="career-list">
                <ul>
                  <li>
                    <a href="#">3학년</a>
                  </li>
                  <li>뉴스, 신문 읽기</li>
                  <li>기자</li>
                  <li>아나운서</li>
                </ul>
              </li>
            </ul>
          </HopeCareerTable>
        </div>
      </div>
      <div className="significant">
        <h4>행동 특성 및 종합 의견</h4>
        <div className="detail-significant">
          <label htmlFor="" className="label-nm">
            <span>1학년</span>
            <textarea
              cols="30"
              rows="6"
              defaultValue={significant[0]}
              readOnly
            ></textarea>
          </label>
          <label htmlFor="" className="label-nm">
            <span>2학년</span>
            <textarea
              cols="30"
              rows="6"
              defaultValue={significant[1]}
              readOnly
            ></textarea>
          </label>
          <label htmlFor="" className="label-nm">
            <span>3학년</span>
            <textarea
              cols="30"
              rows="6"
              defaultValue={significant[2]}
              readOnly
            ></textarea>
          </label>
        </div>
      </div>
    </CareerStatusDiv>
  );
};

export default CareerStatus;
