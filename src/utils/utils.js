export default function convertDateIntoHours(startDate) {
  let date = new Date();
  let now = date.toISOString();
  let diffInMs = Math.abs(new Date(startDate) - new Date(now));
  let diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  let diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  return diffInHours + " hours : " + diffInMinutes + " minutes";
}
