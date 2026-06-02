export const XP_PER_LOG = 20;

export const calculateXP = (
  logsCount
) => {
  return logsCount * XP_PER_LOG;
};

export const calculateLevel = (
  xp
) => {
  return Math.floor(xp / 100) + 1;
};