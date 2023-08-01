import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FoodMenuDiv } from "../../styles/student/FoodMenuStyle";

const FoodMenu = () => {
  const eventData = [
    {
      idTitle: 1,
      color: "transparent",
      textColor: "#000",
      end: "2023-07-01",
      start: "2023-07-01",
      menuType: "점심",
      title:
        "참치마요덥밥,우유생크림빵,실파계란국,돈육김치볶음,배추김치식단완,골드파인애플",
    },
    {
      idTitle: 1,
      color: "transparent",
      textColor: "#000",
      end: "2023-07-01",
      start: "2023-07-01",
      menuType: "석식",
      title:
        "참치마요덥밥,우유생크림빵,실파계란국,돈육김치볶음,배추김치식단완,골드파인애플",
    },
    {
      idTitle: 1,
      color: "transparent",
      textColor: "#000",
      end: "20230702",
      start: "20230702",
      menuType: "점심",
      title:
        "참치마요덥밥,우유생크림빵,실파계란국,돈육김치볶음,배추김치식단완,골드파인애플",
    },
    {
      idTitle: 1,
      color: "transparent",
      textColor: "#000",
      end: "20230709",
      start: "20230709",
      menuType: "점심",
      title:
        "참치마요덥밥,우유생크림빵,실파계란국,돈육김치볶음,배추김치식단완,골드파인애플",
    },
    {
      idTitle: 1,
      color: "transparent",
      textColor: "#000",
      end: "20230716",
      start: "20230716",
      menuType: "점심",
      title:
        "참치마요덥밥,우유생크림빵,실파계란국,돈육김치볶음,배추김치식단완,골드파인애플",
    },
    {
      idTitle: 1,
      color: "transparent",
      textColor: "#000",
      end: "20230723",
      start: "20230723",
      menuType: "점심",
      title:
        "참치마요덥밥,우유생크림빵,실파계란국,돈육김치볶음,배추김치식단완,골드파인애플",
    },
    {
      idTitle: 1,
      color: "transparent",
      textColor: "#000",
      end: "20230730",
      start: "20230730",
      menuType: "점심",
      title:
        "참치마요덥밥,우유생크림빵,실파계란국,돈육김치볶음,배추김치식단완,골드파인애플",
    },
  ];
  return (
    <FoodMenuDiv>
      <h3>{`${2023}년 ${8}월 급식표`}</h3>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="ko"
        height="90%"
        headerToolbar={false}
        dayCellContent={day => day.dayNumberText.replace("일", "")}
        events={eventData}
        eventDidMount={item => {
          const title = item.event.title;
          const menuType = item.event._def.extendedProps.menuType;
          console.log(menuType);
          const titleWithLineBreaks = title.replaceAll(",", "<br />");
          console.log(titleWithLineBreaks);
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
