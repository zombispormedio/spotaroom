const { Router } = require('express');
const { pick } = require('ramda');
const { asPromiseWithErrorHandler } = require('../../lib/utils');

const router = new Router();

router.get(
  '/',
  asPromiseWithErrorHandler(async (req, res) => {
    const { query, scope } = req;
    const homecardService = scope.resolve('homecardService');
    const filter = pick(['city', 'limit'], query);
    const result = await homecardService.getRelevantHomeCards(filter);
    res.json({
      homecards: result.map(
        pick(['adId', 'currencySymbol', 'pricePerMonth', 'photoUrls', 'title'])
      )
    });
  })
);

module.exports = router;
