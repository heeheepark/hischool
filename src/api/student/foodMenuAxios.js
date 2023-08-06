import axios from "axios";

//FoodMenuList;
const getMonthFood = async setFoodMenuList => {
  try {
    const res = await axios.get(`/api/meal`);
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

export { getMonthFood };