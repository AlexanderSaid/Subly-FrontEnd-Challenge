/**
 * This function is to calculate the difference between last edited date and current date and return a relative time.
 */

const editedDate = (date: string) => {
  const currentDate = new Date();
  const updatedDate = new Date(date);
  const diff = currentDate.getTime() - updatedDate.getTime();
  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `over ${years} years ago`;
  }
  if (months > 0) {
    return `${months} months ago`;
  }
  if (days > 0) {
    return `${days} days ago`;
  }
  if (hours > 0) {
    return `${hours} hours ago`;
  }
  if (minutes > 0) {
    return `${minutes} minutes ago`;
  }
  return 'just now';
};

export default editedDate;
