import axios from "axios";

// Student 메인 홈
// 주간 급식표
const getWeekFood = async setWeekMenuData => {
  try {
    const res = await axios.get(`/api/meal/main?sdSchulCode=${7240273}`);
    const result = res.data.list;
    const menuList = result.map(item => {
      item.menuOftheDay = item.menuOftheDay.split(",");
      return item;
    });
    setWeekMenuData(menuList);
  } catch (err) {
    console.log(err);
  }
};

// 시간표
const getTimeTable = async setTimeTable => {
  try {
    const res = await axios.get(`/api/timetable`);
    const result = res.data.list;
    setTimeTable(result);
  } catch (err) {
    console.log(err);
  }
};

export { getWeekFood, getTimeTable };
