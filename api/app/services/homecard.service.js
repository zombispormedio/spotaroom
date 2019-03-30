const got = require('got');
const querystring = require('querystring');

module.exports = ({ apiUrl }) => ({
  async getRelevantHomeCards({ city = 'madrid', limit = 30 } = {}) {
    const {
      body: { data: markers }
    } = await got(`${apiUrl}/listings/search/markers/${city}`, {
      json: true
    });
    const ids = markers.slice(0, limit).map(({ id }) => id);
    const queryForHomecardsById = querystring.stringify({ 'ids[]': ids });
    const {
      body: {
        data: { homecards }
      }
    } = await got(
      `${apiUrl}/listings/search/homecards_ids?${queryForHomecardsById}`,
      {
        json: true
      }
    );
    return homecards;
  }
});
