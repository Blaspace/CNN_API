import express from "express";
import handleBusiness from "../controlers/handleBusiness.js";
import handleHealth from "../controlers/handleHealth.js";
import handlesports from "../controlers/handleSports.js";
import handleworld from "../controlers/handleWorld.js";
import handlepolitics from "../controlers/handlePolitics.js";
import handleEntertainment from "../controlers/handleEntertainment.js";
import handleOpinion from "../controlers/handleOpinion.js";
import handleStyle from "../controlers/handleStyle.js";
import handleGetSingleNews from "../controlers/handleGetSingleNews.js";
import handleHome from "../controlers/handleHome.js";

const router = express.Router();

router.post("/single", handleGetSingleNews);

router.get("/home", handleHome);

router.get("/business", handleBusiness);

router.get("/health", handleHealth);

router.get("/world", handleworld);

router.get("/politics", handlepolitics);

router.get("/sport", handlesports);

router.get("/opinion", handleOpinion);

router.get("/opinion", handleOpinion);

router.get("/style", handleStyle);

router.get("/entertainment", handleEntertainment);

export default router;
