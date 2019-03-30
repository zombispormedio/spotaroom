const HomeCard = require('./homecard');

const Query = `
    type Query {
        graphql: String
    }
`;

module.exports = [Query, HomeCard];
