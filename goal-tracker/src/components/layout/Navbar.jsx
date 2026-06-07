// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Avatar,
//   Chip,
//   Button,
// } from "@mui/material";

// import { useNavigate } from "react-router-dom";

// import { useUser } from "../../context/UserContext";
// import { useThemeMode } from "../../context/ThemeContext";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const { user, logout } =
//     useUser();

//   const { settings } =
//     useThemeMode();

//   const handleLogout =
//     () => {
//       logout();
//       navigate("/");
//     };

//   return (
//     <AppBar
//       position="fixed"
//       color="inherit"
//       elevation={1}
//     >
//       <Toolbar>
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 700,
//           }}
//         >
//           Goal Tracker
//         </Typography>

//         <Box
//           sx={{
//             flexGrow: 1,
//           }}
//         />

//         <Box
//           sx={{
//             display: "flex",
//             alignItems:
//               "center",
//             gap: 1,
//           }}
//         >
//           <Chip
//             color="primary"
//             label={`XP ${user.xp}`}
//           />

//           <Chip
//             variant="outlined"
//             label={`${settings.color} • ${settings.mode}`}
//           />

//           <Typography>
//             {user.name}
//           </Typography>

//           <Avatar>
//             {user.name?.[0]?.toUpperCase()}
//           </Avatar>

//           <Button
//             color="error"
//             onClick={
//               handleLogout
//             }
//           >
//             Logout
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

import {
AppBar,
Toolbar,
Typography,
Box,
Avatar,
Chip,
Button,
} from "@mui/material";

import {
useNavigate,
} from "react-router-dom";

import {
useTranslation,
} from "react-i18next";

import {
useUser,
} from "../../context/UserContext";

import {
useThemeMode,
} from "../../context/ThemeContext";

export default function Navbar() {
const navigate =
useNavigate();

const { t } =
useTranslation();

const {
user,
logout,
} = useUser();

const {
settings,
} =
useThemeMode();

const handleLogout =
() => {
logout();
navigate("/");
};

return ( <AppBar
   position="fixed"
   color="inherit"
   elevation={1}
 > <Toolbar>
<Typography
variant="h6"
sx={{
fontWeight: 700,
}}
>
Goal Tracker </Typography>

```
    <Box
      sx={{
        flexGrow: 1,
      }}
    />

    <Box
      sx={{
        display: "flex",
        alignItems:
          "center",
        gap: 1,
      }}
    >
      <Chip
        color="primary"
        label={`XP ${user.xp}`}
      />

      <Chip
        variant="outlined"
        label={`${settings.color} • ${settings.mode}`}
      />

      <Typography>
        {user.name}
      </Typography>

      <Avatar>
        {user.name?.[0]?.toUpperCase()}
      </Avatar>

      <Button
        color="error"
        onClick={
          handleLogout
        }
      >
        {t(
          "logout"
        )}
      </Button>
    </Box>
  </Toolbar>
</AppBar>
);
}
