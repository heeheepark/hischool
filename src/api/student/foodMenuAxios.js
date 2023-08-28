import { client } from "../client";

// 급식표
const getMonthFood = async (setFoodMenuList, setDate) => {
  try {
    const res = await client.get(`/api/meal`);
    const result = res.data;
    console.log(result);
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
    setDate(result.strYearMonth);
  } catch (err) {
    console.log(err);
  }
};

export { getMonthFood };
