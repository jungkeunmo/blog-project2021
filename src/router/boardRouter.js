import express from "express";
import { routers } from "../routers";
import { boardController } from "../controller/boardController";

const boardRouter = express.Router();

boardRouter.get(routers.BOARD_DETAIL, boardController.detailController);
boardRouter.get(routers.BOARD_WRITE, boardController.boardWriteController);
boardRouter.post(routers.BOARD_WRITE_DB,boardController.boardWriteDbController);
boardRouter.post("/deleteBoard", boardController.deleteBoardController);
boardRouter.post("/updateBoard", boardController.boardUpdateController);
boardRouter.post("/update", boardController.updateController);

export default boardRouter;
