import React, { useEffect, useState } from "react";
import { WeekFoodMenuDiv } from "../../styles/student/StudentHomeStyle";
import { getWeekFood } from "../../api/student/studentHomeAxios";

const WeekFoodMenu = () => {
  const [weekMenuData, setWeekMenuData] = useState(null);
  const dayList = [
    { id: "일요일", data: "일" },
    { id: "월요일", data: "월" },
    { id: "화요일", data: "화" },
    { id: "수요일", data: "수" },
    { id: "목요일", data: "목" },
    { id: "금요일", data: "금" },
    { id: "토요일", data: "토" },
  ];
  const defaultArray = [
    { id: "sun", data: "" },
    { id: "mon", data: "" },
    { id: "tue", data: "" },
    { id: "wed", data: "" },
    { id: "thu", data: "" },
    { id: "fri", data: "" },
    { id: "sat", data: "" },
  ];

  // 요일 구하기
  const getDayOfWeek = weektest => {
    const dayOfWeek = new Date(weektest).getDay();
    return dayOfWeek;
  };

  // 새로운 급식 데이터 생성
  const newMenuList = defaultArray.map((item, index) => {
    weekMenuData
      ? weekMenuData.forEach(dayMenu => {
          if (getDayOfWeek(dayMenu.date) === index) {
            item.data = dayMenu;
          }
        })
      : "";
    return { ...item };
  });

  useEffect(() => {
    getWeekFood(setWeekMenuData);
  }, []);

  return (
    <WeekFoodMenuDiv>
      <ul>
        <li className="day-list">
          <ul>
            {dayList.map(item => (
              <li className="day" key={item.id}>
                {item.data}
              </li>
            ))}
          </ul>
        </li>
        <li className="lunch-menu-list">
          <ul>
            {newMenuList.map(item => {
              if (item.data.menuOftheDay) {
                return (
                  <li className="menu" key={item.id}>
                    <span className="menu-type">{item.data.lunchOrDinner}</span>
                    <p>
                      {item.data.menuOftheDay
                        ? item.data.menuOftheDay.map((item, index) => (
                            <span key={index}>{item}</span>
                          ))
                        : ""}
                    </p>
                  </li>
                );
              } else {
                return (
                  <li className="menu" key={item.id}>
                    <p>
                      <span>-</span>
                    </p>
                  </li>
                );
              }
            })}
          </ul>
        </li>
        <li className="dinner-menu-list">
          <ul>
            {newMenuList.map((item, index) => {
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
                  <li className="menu" key={index}>
                    <p>-</p>
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
