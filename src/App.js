import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import StudentHome from "./pages/student/StudentHome";
import Mypage from "./pages/login/Mypage";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./pages/notice/NoticeDetail";
import SchoolRecord from "./pages/student/SchoolRecord";
import MockRecord from "./pages/student/MockRecord";
import LifeRecord from "./pages/student/LifeRecord";
import FoodMenu from "./pages/student/FoodMenu";
import About from "./pages/About";
import TeacherHome from "./pages/teacher/TeacherHome";
import StudentList from "./pages/teacher/studentlist/StudentList";
import SignList from "./pages/teacher/studentlist/SignList";
import StudentRecord from "./pages/teacher/studentrecord/StudentRecord";
import StudentLifeRecord from "./pages/teacher/StudentLifeRecord";
import InputSchoolRecord from "./pages/teacher/studentrecord/InputSchoolRecord";
import EditSchoolRecord from "./pages/teacher/studentrecord/EditSchoolRecord";
import InputMockRecord from "./pages/teacher/studentrecord/InputMockRecord";
import EditMockRecord from "./pages/teacher/studentrecord/EditMockRecord";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Main />}>
          {/* 학생 */}
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/student/mypage" element={<Mypage />} />
          <Route path="/student/notice" element={<Notice />} />
          <Route path="/student/notice/:noticeId" element={<NoticeDetail />} />
          <Route path="/student/schoolrecord" element={<SchoolRecord />} />
          <Route path="/student/mockrecord" element={<MockRecord />} />
          <Route path="/student/liferecord" element={<LifeRecord />} />
          <Route path="/student/foodmenu" element={<FoodMenu />} />
          <Route path="/student/about" element={<About />} />
          {/* 선생님 */}
          <Route path="/teacher/home" element={<TeacherHome />} />
          <Route path="/teacher/mypage" element={<Mypage />} />
          <Route path="/teacher/notice" element={<Notice />} />
          <Route path="/teacher/notice/:noticeId" element={<NoticeDetail />} />
          <Route path="/teacher/studentlist" element={<StudentList />} />
          <Route path="/teacher/studentlist/signlist" element={<SignList />} />
          <Route path="/teacher/record" element={<StudentRecord />} />
          <Route
            path="/teacher/studentlist/studentliferecord/:studentId"
            element={<StudentLifeRecord />}
          />
          <Route
            path="/teacher/inputschoolrecord"
            element={<InputSchoolRecord />}
          />
          <Route
            path="/teacher/editschoolrecord"
            element={<EditSchoolRecord />}
          />
          <Route
            path="/teacher/inputmockrecord"
            element={<InputMockRecord />}
          />
          <Route path="/teacher/editmockrecord" element={<EditMockRecord />} />
          <Route path="/teacher/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
