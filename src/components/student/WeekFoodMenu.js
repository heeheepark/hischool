import React, { useEffect, useState } from "react";
import { WeekFoodMenuDiv } from "../../styles/student/StudentHomeStyle";
import { getWeekFood } from "../../axios/studentAxios";

const WeekFoodMenu = () => {
  const [weekMenuData, setWeekMenuData] = useState(null);
  const defaultArray = [{}, {}, {}, {}, {}, {}, {}];

  // 요일 구하기
  const getDayOfWeek = weektest => {
    const dayOfWeek = new Date(weektest).getDay();
    return dayOfWeek;
  };

  // 새로운 급식 데이터 생성
  const newMenu = defaultArray.map((item, index) => {
    !weekMenuData
      ? ""
      : weekMenuData.forEach(dayMenu => {
          // console.log(dayMenu);
          if (getDayOfWeek(dayMenu.date) === index) {
            item = dayMenu;
          }
          // if (dayMenu.menuOftheDay) {
          //   const menuList = dayMenu.menuOftheDay.split(",");
          //   console.log(menuList);
          //   // dayMenu.menuOftheDay = [];
          // }
        });
    return item;
  });

  useEffect(() => {
    getWeekFood(setWeekMenuData);
  }, []);

  return (
    <WeekFoodMenuDiv>
      <ul>
        <li className="day-list">
          <ul>
            <li className="day">일</li>
            <li className="day">월</li>
            <li className="day">화</li>
            <li className="day">수</li>
            <li className="day">목</li>
            <li className="day">금</li>
            <li className="day">토</li>
          </ul>
        </li>
        <li className="lunch-menu-list">
          <ul>
            <li className="menu">
              <span className="menu-type">{newMenu[0].lunchOrDinner}</span>
              <p>
                <span>{newMenu[0].menuOftheDay}</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">{newMenu[1].lunchOrDinner}</span>
              <p>
                <span>{newMenu[1].menuOftheDay}</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">{newMenu[2].lunchOrDinner}</span>
              <p>
                <span>{newMenu[2].menuOftheDay}</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">{newMenu[3].lunchOrDinner}</span>
              <p>
                <span>{newMenu[3].menuOftheDay}</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">{newMenu[4].lunchOrDinner}</span>
              <p>
                <span>{newMenu[4].menuOftheDay}</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">{newMenu[5].lunchOrDinner}</span>
              <p>
                <span>{newMenu[5].menuOftheDay}</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">{newMenu[6].lunchOrDinner}</span>
              <p>
                <span>{newMenu[6].menuOftheDay}</span>
              </p>
            </li>
          </ul>
        </li>
        <li className="dinner-menu-list">
          <ul>
            <li className="menu">
              <span className="menu-type">석식</span>
              <p>
                <span>잡곡밥</span>
                <span>근대국</span>
                <span>순살간장찜닭</span>
                <span>숙주나물무침</span>
                <span>야채비빔만두</span>
                <span>포기김치</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">석식</span>
              <p>
                <span>잡곡밥</span>
                <span>근대국</span>
                <span>순살간장찜닭</span>
                <span>숙주나물무침</span>
                <span>야채비빔만두</span>
                <span>포기김치</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">석식</span>
              <p>
                <span>잡곡밥</span>
                <span>근대국</span>
                <span>순살간장찜닭</span>
                <span>숙주나물무침</span>
                <span>야채비빔만두</span>
                <span>포기김치</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">석식</span>
              <p>
                <span>잡곡밥</span>
                <span>근대국</span>
                <span>순살간장찜닭</span>
                <span>숙주나물무침</span>
                <span>야채비빔만두</span>
                <span>포기김치</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">석식</span>
              <p>
                <span>잡곡밥</span>
                <span>근대국</span>
                <span>순살간장찜닭</span>
                <span>숙주나물무침</span>
                <span>야채비빔만두</span>
                <span>포기김치</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">석식</span>
              <p>
                <span>잡곡밥</span>
                <span>근대국</span>
                <span>순살간장찜닭</span>
                <span>숙주나물무침</span>
                <span>야채비빔만두</span>
                <span>포기김치</span>
              </p>
            </li>
            <li className="menu">
              <span className="menu-type">석식</span>
              <p>
                <span>잡곡밥</span>
                <span>근대국</span>
                <span>순살간장찜닭</span>
                <span>숙주나물무침</span>
                <span>야채비빔만두</span>
                <span>포기김치</span>
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </WeekFoodMenuDiv>
  );
};

export default WeekFoodMenu;
