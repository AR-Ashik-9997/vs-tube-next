export const readableTime = (isoTime: string) => {
  const readableTime = new Date(isoTime).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return readableTime;
};
