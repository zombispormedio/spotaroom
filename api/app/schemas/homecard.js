module.exports = `
  type PhotoUrl {
    homecardHidpi: String
  }
  type HomeCard {
    id: Int
    adId: Int
    currencySymbol: String
    pricePerMonth: Int
    photoUrls: PhotoUrl
    title: String
  }

  extend type Query {
    homecards(limit: Int, city: String): [HomeCard]
  }
`;
