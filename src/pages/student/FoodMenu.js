import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FoodMenuDiv } from "../../styles/student/FoodMenuStyle";
import { getMonthFood } from "../../api/student/foodMenuAxios";

const FoodMenu = () => {
  const [foodMenuList, setFoodMenuList] = useState(null);
  const [date, setDate] = useState(null);
  const year = date?.slice(0,4)
  const month = date?.slice(4, 5) === "0" ? date?.slice(5) : date?.slice(4)
  const eventData = foodMenuList;

  useEffect(() => {
    getMonthFood(setFoodMenuList, setDate);
  }, []);

  return (
    <FoodMenuDiv>
      <h3>{`${year}년 ${month}월 급식표`}</h3>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="ko"
        height="90%"
        headerToolbar={false}
        dayCellContent={day => day.dayNumberText.replace("일", "")}
        events={eventData}
        eventBackgroundColor="transparent"
        eventBorderColor="transparent"
        eventDidMount={item => {
          const title = item.event.title;
          const menuType = item.event._def.extendedProps.menuType;
          const titleWithLineBreaks = title.replaceAll(",", "<br />");
          const newHTML = `
            <div>
              <span class="menu">${menuType ? menuType : ""}</span>
              <p>
                ${titleWithLineBreaks ? titleWithLineBreaks : ""}
              </p>
            </div>`;
          item.el.innerHTML = newHTML;
        }}
      />
    </FoodMenuDiv>
  );
};

export default FoodMenu;
