import axiosInstance from "../api/commonAxios";

// Student Home
const getWeekFood = async setWeekMenuData => {
  try {
    const res = await axiosInstance.get(
      `/api/meal/main?sdSchulCode=${7240273}`,
    );
    const result = res.data;
    const promises = result.list.map(item => item);
    const MenuArray = await Promise.all(promises.map(item => item));
    setWeekMenuData(MenuArray);
  } catch (err) {
    console.log(err);
  }
};

// FoodMenuList
// const getMonthFood = async () => {
//   try {
//     const res = await axios.get();
//   } catch (error) {
//     console.log(err);
//   }
// };

export { getWeekFood };
