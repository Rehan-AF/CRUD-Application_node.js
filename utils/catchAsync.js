const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {
    console.log(err.message);
  });
};
export default catchAsync;
