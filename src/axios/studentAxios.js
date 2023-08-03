import { async } from "q";
import axiosInstance from "./commonAxios";
import axios from "axios";

// Student Home
const getWeekFood = async setWeekMenuData => {
  try {
    const res = await axiosInstance.get(
      `/api/meal/main?sdSchulCode=${7240273}`,
    );
    const result = res.data.list;
    // console.log(result);
    setWeekMenuData(result);
  } catch (err) {
    console.log(err);
  }
};

const getSchedule = async setTimeTable => {
  try {
    const res = await axiosInstance.get(
      `/api/timetable?sdSchulCode=${7240273}&grade=${1}&classNm=${1}`,
    );
    const result = res.data.list;
    setTimeTable(result);
  } catch (err) {
    console.log(err);
  }
};

//FoodMenuList;
const getMonthFood = async setFoodMenuList => {
  try {
    const res = await axiosInstance.get(`/api/meal?sdSchulCode=${7240273}`);
    const result = res.data;
    const foodMenuList = result.list;
    const newFoodMenuList = foodMenuList.map(item => {
      const newList = {
        start: item.date,
        end: item.date,
        menuType: item.lunchOrDinner,
        title: item.menuOftheDay,
      };
      return newList;
    });
    setFoodMenuList(newFoodMenuList);
  } catch (err) {
    console.log(err);
  }
};

export { getWeekFood, getSchedule, getMonthFood };
