export const capitalize = str => {
  if (str && str.length > 0) {
    return str.replace(
      /\w\S*/g,
      txt => `${txt.charAt(0).toUpperCase()}${txt.substr(1)}`,
    );
  }

  return '';
};

export const isJSON = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
