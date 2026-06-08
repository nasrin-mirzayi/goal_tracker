import {
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

import {
  useTranslation,
} from "react-i18next";

export default function Categories() {
  const { t } =
    useTranslation();

  const categories = [
    t("health"),
    t("study"),
    t("work"),
    t("personal"),
  ];

  return (
    <> <Typography
      variant="h4"
      mb={3}
    >
      {t("categories")} </Typography>


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 3,
        }}
      >
        {categories.map(
          (cat) => (
            <Card
              key={cat}
            >
              <CardContent>
                <Typography variant="h6">
                  {cat}
                </Typography>
              </CardContent>
            </Card>
          )
        )}
      </Box>
    </>


  );
}
