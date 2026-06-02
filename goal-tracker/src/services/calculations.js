export const calculateProgress =
  (
    progress,
    target
  ) => {
    if (!target) return 0;

    return Math.min(
      100,
      Math.round(
        (progress /
          target) *
          100
      )
    );
  };