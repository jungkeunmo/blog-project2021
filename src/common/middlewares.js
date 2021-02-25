import dotenv from "dotenv";
dotenv.config();

const checkDevMode = () => {
  if (process.env.NODE_ENV === "development") {
    return true;
  } else {
    return false;
  }
};

const middlewares = {
  checkDevMode,
};

export default middlewares;
