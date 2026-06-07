// import {
//   Typography,
//   Box,
//   Card,
//   CardContent,
//   Button,
//   Switch,
// } from "@mui/material";

// import {
//   useThemeMode,
// } from "../context/ThemeContext";

// import {
//   useLanguage,
// } from "../context/LanguageContext";

// const colors = [
//   "purple",
//   "blue",
//   "green",
//   "pink",
//   "brown",
// ];

// export default function Settings() {
//   const {
//     settings,
//     toggleMode,
//     setColor,
//   } = useThemeMode();

//   const {
//     language,
//     toggleLanguage,
//   } = useLanguage();

//   const resetApp = () => {
//     localStorage.clear();
//     window.location.reload();
//   };

//   const exportData = () => {
//     const data = {
//       user: JSON.parse(
//         localStorage.getItem("user") ||
//           "{}"
//       ),
//       goals: JSON.parse(
//         localStorage.getItem("goals") ||
//           "[]"
//       ),
//       achievements:
//         JSON.parse(
//           localStorage.getItem(
//             "achievements"
//           ) || "[]"
//         ),
//       themeSettings:
//         JSON.parse(
//           localStorage.getItem(
//             "themeSettings"
//           ) || "{}"
//         ),
//       language:
//         localStorage.getItem(
//           "language"
//         ) || "en",
//     };

//     const blob =
//       new Blob(
//         [
//           JSON.stringify(
//             data,
//             null,
//             2
//           ),
//         ],
//         {
//           type:
//             "application/json",
//         }
//       );

//     const url =
//       URL.createObjectURL(
//         blob
//       );

//     const link =
//       document.createElement(
//         "a"
//       );

//     link.href = url;
//     link.download =
//       "goal-tracker-backup.json";

//     link.click();

//     URL.revokeObjectURL(
//       url
//     );
//   };

//   const importData = (
//     event
//   ) => {
//     const file =
//       event.target.files?.[0];

//     if (!file) return;

//     const reader =
//       new FileReader();

//     reader.onload = (
//       e
//     ) => {
//       try {
//         const data =
//           JSON.parse(
//             e.target.result
//           );

//         Object.entries(
//           data
//         ).forEach(
//           ([key, value]) =>
//             localStorage.setItem(
//               key,
//               typeof value ===
//                 "string"
//                 ? value
//                 : JSON.stringify(
//                     value
//                   )
//             )
//         );

//         window.location.reload();
//       } catch {
//         alert(
//           "Invalid backup file"
//         );
//       }
//     };

//     reader.readAsText(
//       file
//     );
//   };

//   return (
//     <Box>
//       <Typography
//         variant="h4"
//         mb={3}
//       >
//         Settings
//       </Typography>

//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Typography
//             variant="h6"
//             mb={2}
//           >
//             Appearance
//           </Typography>

//           <Box
//             sx={{
//               display:
//                 "flex",
//               alignItems:
//                 "center",
//               gap: 2,
//             }}
//           >
//             <Typography>
//               Light
//             </Typography>

//             <Switch
//               checked={
//                 settings.mode ===
//                 "dark"
//               }
//               onChange={
//                 toggleMode
//               }
//             />

//             <Typography>
//               Dark
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>

//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Typography
//             variant="h6"
//             mb={2}
//           >
//             Theme Color
//           </Typography>

//           <Box
//             sx={{
//               display:
//                 "flex",
//               gap: 2,
//               flexWrap:
//                 "wrap",
//             }}
//           >
//             {colors.map(
//               (color) => (
//                 <Button
//                   key={color}
//                   variant={
//                     settings.color ===
//                     color
//                       ? "contained"
//                       : "outlined"
//                   }
//                   onClick={() =>
//                     setColor(
//                       color
//                     )
//                   }
//                 >
//                   {color}
//                 </Button>
//               )
//             )}
//           </Box>
//         </CardContent>
//       </Card>

//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Typography
//             variant="h6"
//             mb={2}
//           >
//             Language
//           </Typography>

//           <Button
//             variant="contained"
//             onClick={
//               toggleLanguage
//             }
//           >
//             {language ===
//             "en"
//               ? "فارسی"
//               : "English"}
//           </Button>
//         </CardContent>
//       </Card>

//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Typography
//             variant="h6"
//             mb={2}
//           >
//             Backup
//           </Typography>

//           <Button
//             variant="contained"
//             onClick={
//               exportData
//             }
//             sx={{
//               mr: 2,
//             }}
//           >
//             Export Data
//           </Button>

//           <Button
//             component="label"
//             variant="outlined"
//           >
//             Import Data

//             <input
//               hidden
//               type="file"
//               accept=".json"
//               onChange={
//                 importData
//               }
//             />
//           </Button>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent>
//           <Typography
//             variant="h6"
//             mb={2}
//           >
//             Danger Zone
//           </Typography>

//           <Button
//             color="error"
//             variant="contained"
//             onClick={
//               resetApp
//             }
//           >
//             Reset All Data
//           </Button>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

import {
Typography,
Box,
Card,
CardContent,
Button,
Switch,
} from "@mui/material";

import {
useTranslation,
} from "react-i18next";

import {
useThemeMode,
} from "../context/ThemeContext";

import {
useLanguage,
} from "../context/LanguageContext";

const colors = [
"purple",
"blue",
"green",
"pink",
"brown",
];

export default function Settings() {
const { t } =
useTranslation();

const {
settings,
toggleMode,
setColor,
} = useThemeMode();

const {
language,
toggleLanguage,
} = useLanguage();

const resetApp = () => {
localStorage.clear();
window.location.reload();
};

const exportData = () => {
const data = {
user: JSON.parse(
localStorage.getItem("user") ||
"{}"
),
goals: JSON.parse(
localStorage.getItem("goals") ||
"[]"
),
achievements:
JSON.parse(
localStorage.getItem(
"achievements"
) || "[]"
),
themeSettings:
JSON.parse(
localStorage.getItem(
"themeSettings"
) || "{}"
),
language:
localStorage.getItem(
"language"
) || "en",
};

const blob =
  new Blob(
    [
      JSON.stringify(
        data,
        null,
        2
      ),
    ],
    {
      type:
        "application/json",
    }
  );

const url =
  URL.createObjectURL(
    blob
  );

const link =
  document.createElement(
    "a"
  );

link.href = url;
link.download =
  "goal-tracker-backup.json";

link.click();

URL.revokeObjectURL(
  url
);


};

const importData = (
event
) => {
const file =
event.target.files?.[0];

if (!file) return;

const reader =
  new FileReader();

reader.onload = (
  e
) => {
  try {
    const data =
      JSON.parse(
        e.target.result
      );

    Object.entries(
      data
    ).forEach(
      ([key, value]) =>
        localStorage.setItem(
          key,
          typeof value ===
            "string"
            ? value
            : JSON.stringify(
                value
              )
        )
    );

    window.location.reload();
  } catch {
    alert(
      t("invalidBackup")
    );
  }
};

reader.readAsText(
  file
);

};

return ( <Box> <Typography
     variant="h4"
     mb={3}
   >
{t("settings")} </Typography>

  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Typography
        variant="h6"
        mb={2}
      >
        {t("appearance")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems:
            "center",
          gap: 2,
        }}
      >
        <Typography>
          {t("light")}
        </Typography>

        <Switch
          checked={
            settings.mode ===
            "dark"
          }
          onChange={
            toggleMode
          }
        />

        <Typography>
          {t("dark")}
        </Typography>
      </Box>
    </CardContent>
  </Card>

  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Typography
        variant="h6"
        mb={2}
      >
        {t("themeColor")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap:
            "wrap",
        }}
      >
        {colors.map(
          (color) => (
            <Button
              key={color}
              variant={
                settings.color ===
                color
                  ? "contained"
                  : "outlined"
              }
              onClick={() =>
                setColor(
                  color
                )
              }
            >
              {color}
            </Button>
          )
        )}
      </Box>
    </CardContent>
  </Card>

  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Typography
        variant="h6"
        mb={2}
      >
        {t("language")}
      </Typography>

      <Button
        variant="contained"
        onClick={
          toggleLanguage
        }
      >
        {language ===
        "en"
          ? "فارسی"
          : "English"}
      </Button>
    </CardContent>
  </Card>

  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Typography
        variant="h6"
        mb={2}
      >
        {t("backup")}
      </Typography>

      <Button
        variant="contained"
        onClick={
          exportData
        }
        sx={{
          mr: 2,
        }}
      >
        {t("exportData")}
      </Button>

      <Button
        component="label"
        variant="outlined"
      >
        {t("importData")}

        <input
          hidden
          type="file"
          accept=".json"
          onChange={
            importData
          }
        />
      </Button>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Typography
        variant="h6"
        mb={2}
      >
        {t("dangerZone")}
      </Typography>

      <Button
        color="error"
        variant="contained"
        onClick={
          resetApp
        }
      >
        {t("resetAllData")}
      </Button>
    </CardContent>
  </Card>
</Box>

);
}
