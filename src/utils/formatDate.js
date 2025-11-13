const formatDate = date => {
  const now = new Date();
  const then = new Date(date);

  const seconds = Math.floor((now - then) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 4) {
    return then.toDateString();
  } else if (weeks > 1) {
    return `${days} weeks ago`;
  } else if (weeks === 1) {
    return `${weeks} weeks ago`;
  } else if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return `${days} day ago`;
  } else if (hours > 1) {
    return `${hours} hours ago`;
  } else if (hours === 1) {
    return `${hours} hour ago`;
  } else if (minutes > 1) {
    return `${minutes} minutes ago`;
  } else if (minutes === 1) {
    return `${minutes} minute ago`;
  } else if (seconds > 1) {
    return `${seconds} seconds ago`;
  } else {
    return 'Just now';
  }
};

export default formatDate;
