import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Goals from "../pages/Goals";
import CreateGoal from "../pages/CreateGoal";
import GoalDetails from "../pages/GoalDetails";
import Categories from "../pages/Categories";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import EditGoal from "../pages/EditGoal";
import Profile from "../pages/Profile";
import AchievementsPage from "../pages/Achievements";

export default function Router() {
  return (
  
  <BrowserRouter>
   <Routes>
    <Route
      path="/"
      element={<Login />}
    />


    <Route
      element={<MainLayout />}
    >
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/goals"
        element={<Goals />}
      />

      <Route
        path="/goals/new"
        element={<CreateGoal />}
      />

      <Route
        path="/goals/edit/:id"
        element={<EditGoal />}
      />

      <Route
        path="/goals/:id"
        element={<GoalDetails />}
      />

      <Route
        path="/categories"
        element={<Categories />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/achievements"
        element={
          <AchievementsPage />
        }
      />
    </Route>

    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>
  </BrowserRouter>

  );
}
