//global router
const HOME = "/";
const CONTACT = `/contact`;

//development router
const DEVELOPMENT = `/development`;
const NODEJS = `/nodejs`;
const MONGODB = `/mongoDB`;
const JAVASCRIPT = `/javascript`;
const REACT = `/react`;

// board
const BOARD_DETAIL = `/detail/:id`;
const BOARD_WRITE = `/write/:type`;
const BOARD_WRITE_DB = `/write`;

export const routers = {
  HOME,
  CONTACT,
  DEVELOPMENT,
  NODEJS,
  MONGODB,
  JAVASCRIPT,
  REACT,
  BOARD_DETAIL,
  BOARD_WRITE,
  BOARD_WRITE_DB,
};
