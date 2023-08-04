import axios from "axios";

export const getSchedule = async setScheduleData => {
  try {
    const res = await axios.get(
      `/api/schedule?sdSchulCode=${7240273}&aaFromYmd=${20230801}&aaToYmd=${20230831}`,
    );
    const scheduleList = res.data.infoList;
    const newScheduleList = scheduleList.map(item => {
      return {
        title: item.eventNm,
        start: item.aaYmd,
        end: item.aaYmd,
      };
    });
    setScheduleData(newScheduleList);
  } catch (err) {
    console.log(err);
  }
};
