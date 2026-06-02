export function updateStreak(
  user
) {
  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const lastDate =
    user.lastProgressDate;

  if (!lastDate) {
    return {
      ...user,
      streak: 1,
      lastProgressDate:
        today,
    };
  }

  const current =
    new Date(today);

  const previous =
    new Date(lastDate);

  const diff =
    Math.floor(
      (
        current -
        previous
      ) /
        (1000 *
          60 *
          60 *
          24)
    );

  if (diff === 0) {
    return user;
  }

  if (diff === 1) {
    return {
      ...user,
      streak:
        user.streak + 1,
      lastProgressDate:
        today,
    };
  }

  return {
    ...user,
    streak: 1,
    lastProgressDate:
      today,
  };
}