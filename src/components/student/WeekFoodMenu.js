import React, { useEffect, useState } from "react";
import { WeekFoodMenuDiv } from "../../styles/student/StudentHomeStyle";
import { getWeekFood, test } from "../../axios/studentAxios";

const WeekFoodMenu = () => {
  const [weekMenuData, setWeekMenuData] = useState(null);
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  const defaultArray = [{}, {}, {}, {}, {}, {}, {}];

  // 요일 구하기
  const getDayOfWeek = weektest => {
    const dayOfWeek = new Date(weektest).getDay();
    return dayOfWeek;
  };

  // 새로운 급식 데이터 생성
  const newMenuList = defaultArray.map((item, index) => {
    weekMenuData
      ? weekMenuData.forEach(dayMenu => {
          // console.log(dayMenu);
          if (getDayOfWeek(dayMenu.date) === index) {
            item = dayMenu;
          }
          if (dayMenu.menuOftheDay) {
            const menuList = dayMenu.menuOftheDay.replaceAll(",", "<br />");
            dayMenu.menuOftheDay = menuList;
            console.log(dayMenu.menuOftheDay);
          }
        })
      : "";
    return item;
  });

  console.log(newMenuList);
  useEffect(() => {
    getWeekFood(setWeekMenuData);
  }, []);

  return (
    <WeekFoodMenuDiv>
      <ul>
        <li className="day-list">
          <ul>
            {dayList.map((item, index) => (
              <li className="day" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </li>
        <li className="lunch-menu-list">
          <ul>
            {newMenuList.map((item, index) => {
              return (
                <li className="menu" key={index}>
                  <span className="menu-type">{item.lunchOrDinner}</span>
                  <p>
                    <span>
                      {/* {item.menuOftheDay
                        ? item.menuOftheDay.replaceAll(",", "<br />")
                        : ""} */}
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="dinner-menu-list">
          <ul>
            {newMenuList.map(item => {
              if (item.lunchOrDinner === "석식") {
                return (
                  <li className="menu" key={item.date}>
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
                );
              } else {
                return (
                  <li className="menu" key={item.date}>
                    <p>
                      <span>석식이</span>
                      <span>없는</span>
                      <span>날입니다.</span>
                    </p>
                  </li>
                );
              }
            })}
          </ul>
        </li>
      </ul>
    </WeekFoodMenuDiv>
  );
};

export default WeekFoodMenu;
