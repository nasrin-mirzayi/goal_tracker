import {
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

export default function Categories() {
  const categories = [
    "Health",
    "Study",
    "Work",
    "Personal",
  ];

  return (
    <>
      <Typography variant="h4" mb={3}>
        Categories
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 3,
        }}
      >
        {categories.map((cat) => (
          <Card key={cat}>
            <CardContent>
              <Typography variant="h6">
                {cat}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}