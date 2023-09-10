import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FoodMenuDiv } from "../../styles/student/studenthome/FoodMenuStyle";
import { getMonthFood } from "../../api/student/foodMenuAxios";
import { useDispatch, useSelector } from "react-redux";
import { finishLoading, startLoading } from "../../reducers/loadingSlice";
import { client } from "../../api/login/client";
import { Loading } from "../../components/Loading";

const FoodMenu = () => {
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const [foodMenuList, setFoodMenuList] = useState(null);
  const [date, setDate] = useState(null);
  const year = date?.slice(0, 4);
  const month = date?.slice(4, 5) === "0" ? date?.slice(5) : date?.slice(4);
  const eventData = foodMenuList;

  useEffect(() => {
    // 로딩 호출
    client.interceptors.request.use(function (config) {
      dispatch(startLoading({}));
      return config;
    });
    // 로딩 완료
    client.interceptors.response.use(config => {
      dispatch(finishLoading({}));
      return config;
    });
    getMonthFood(setFoodMenuList, setDate);
  }, []);

  return (
    <FoodMenuDiv>
      {loading ? <Loading /> : null}
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
