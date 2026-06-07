// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Chip,
// } from "@mui/material";

// import {
//   useAchievements,
// } from "../context/AchievementContext";

// export default function AchievementsPage() {
//   const {
//     achievements,
//   } =
//     useAchievements();

//   return (
//     <Box>
//       <Typography
//         variant="h4"
//         mb={3}
//       >
//         Achievements
//       </Typography>

//       <Card>
//         <CardContent>
//           <Box
//             sx={{
//               display:
//                 "flex",
//               gap: 1,
//               flexWrap:
//                 "wrap",
//             }}
//           >
//             {achievements.map(
//               (
//                 item,
//                 index
//               ) => (
//                 <Chip
//                   key={
//                     index
//                   }
//                   label={
//                     item
//                   }
//                   color="primary"
//                 />
//               )
//             )}
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

import {
Card,
CardContent,
Typography,
Chip,
Box,
} from "@mui/material";

import {
useTranslation,
} from "react-i18next";

import {
useAchievements,
} from "../context/AchievementContext";

export default function Achievements() {
const {
achievements,
} =
useAchievements();

const { t } =
useTranslation();

return ( <Card> <CardContent> <Typography
       variant="h6"
       mb={2}
     >
{t(
"achievements"
)} </Typography>

```
    <Box
      sx={{
        display:
          "flex",
        flexWrap:
          "wrap",
        gap: 1,
      }}
    >
      {achievements.map(
        (
          item,
          index
        ) => (
          <Chip
            key={
              index
            }
            label={
              item
            }
            color="primary"
          />
        )
      )}
    </Box>
  </CardContent>
</Card>


);
}
