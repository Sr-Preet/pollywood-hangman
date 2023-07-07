const mobileReducer = (state = false, { type }) => {
  if (type === "IS_MOBILE") return true;
  return state;
};

export default mobileReducer;
