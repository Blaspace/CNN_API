const express = require('express')
const handleGetHealth = require('../controlers/handleGetHealth')
const handleGetSports = require('../controlers/handleGetSports')
const handleGetBusiness = require('../controlers/handleGetBusiness')
const handleBusiness = require('../controlers/handleBusiness')
const handleHealth = require('../controlers/handleHealth')
const handlesports = require('../controlers/handleSports')
const handleworld = require('../controlers/handleWorld')
const handlepolitics = require('../controlers/handlePolitics')
const handleEntertainment = require('../controlers/handleEntertainment')
const handleOpinion = require('../controlers/handleOpinion')
const handleStyle = require('../controlers/handleStyle')
const handleGetStyle = require('../controlers/handleGetStyle')
const handleGetTravle = require('../controlers/handleGetTravles')
const handleGetOpinion = require('../controlers/handleGetOpinion')
const handleGetPolitics = require('../controlers/handleGetPolitics')
const handleGetWorld = require('../controlers/handleGetWorld')

const router = express.Router()

router.get('/sport/:id', handleGetSports)

router.get('/business/:id', handleGetBusiness)

router.get('/style/:id', handleGetStyle)

router.get('/travle/:id', handleGetTravle)

router.get('/opinion/:id', handleGetOpinion)

router.get('/politics/:id', handleGetPolitics)

router.get('/world/:id', handleGetWorld)

router.get('/business', handleBusiness)

router.get('/health', handleHealth)

router.get('/world', handleworld)

router.get('/politics', handlepolitics)

router.get('/sport', handlesports)

router.get('/opinion', handleOpinion)

router.get('/opinion', handleOpinion)

router.get('/style', handleStyle)

router.get('/entertainment', handleEntertainment)

router.get('/health/:id', handleGetHealth)

module.exports = router