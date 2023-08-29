import client from "../client"

export const getAttendList = async() => {
  const res = await client.get(`/api/attendance?userId=${}`)
  const result = res.data;
  console.log(result)
}