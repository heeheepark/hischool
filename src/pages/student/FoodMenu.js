import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FoodMenuDiv } from "../../styles/student/FoodMenuStyle";
import { getMonthFood } from "../../api/studentAxios";

const FoodMenu = () => {
  const [foodMenuList, setFoodMenuList] = useState(null);
  useEffect(() => {
    getMonthFood(setFoodMenuList);
  }, []);
  //
  const eventData = foodMenuList;

  return (
    <FoodMenuDiv>
      <h3>{`${2023}년 ${6}월 급식표`}</h3>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="ko"
        height="90%"
        headerToolbar={false}
        dayCellContent={day => day.dayNumberText.replace("일", "")}
        initialDate={"2023-06-01"}
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
