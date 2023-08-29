import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import StudentHome from "./pages/student/StudentHome";
import SchoolRecord from "./pages/student/SchoolRecord";
import MockRecord from "./pages/student/MockRecord";
import FoodMenu from "./pages/student/FoodMenu";
import TeacherHome from "./pages/teacher/TeacherHome";
import StudentList from "./pages/teacher/StudentList";
import SignList from "./pages/teacher/SignList";
import StudentRecord from "./pages/teacher/StudentRecord";
import InputSchoolRecord from "./pages/teacher/InputSchoolRecord";
import InputSubject from "./pages/teacher/InputSubject";
import InputMockRecord from "./pages/teacher/InputMockRecord";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import EditSchoolRecord from "./pages/teacher/EditSchoolRecord";
import EditMockRecord from "./pages/teacher/EditMockRecord";
import Notice from "./pages/Notice";
import LifeRecord from "./pages/student/LifeRecord";
import StudentLifeRecord from "./pages/teacher/StudentLifeRecord";
import NoticeDetail from "./pages/NoticeDetail";

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
          <Route path="/student/schoolrecord" element={<SchoolRecord />} />
          <Route path="/student/mockrecord" element={<MockRecord />} />
          <Route path="/student/liferecord" element={<LifeRecord />} />
          <Route path="/student/foodmenu" element={<FoodMenu />} />
          <Route path="/student/about" element={<About />} />
          {/* 선생님 */}
          <Route path="/teacher/home" element={<TeacherHome />} />
          <Route path="/teacher/mypage" element={<Mypage />} />
          <Route path="/teacher/notice" element={<Notice />} />
          <Route path="/teacher/studentlist" element={<StudentList />} />
          <Route path="/teacher/signlist" element={<SignList />} />
          <Route path="/teacher/record" element={<StudentRecord />} />
          <Route
            path="/teacher/studentliferecord"
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
          <Route path="/teacher/inputsubject" element={<InputSubject />} />
          <Route
            path="/teacher/inputmockrecord"
            element={<InputMockRecord />}
          />
          <Route path="/teacher/editmockrecord" element={<EditMockRecord />} />
          {/* 공지사항 */}
          <Route path="/noticedetail/:noticeId" element={<NoticeDetail />} />
          <Route path="/teacher/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
