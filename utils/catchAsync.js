const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {
    console.log(err);
  });
};
export default catchAsync;
