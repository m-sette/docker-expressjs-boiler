import express from "express";
import {getHome} from "../service/homeService.js";

const router = express.Router()

router.get("/", (_, res) => {
    res.send(getHome())
})
export default router
