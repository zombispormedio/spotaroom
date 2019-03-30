import { useQuery } from 'urql';

const getHomeCardsQuery = `
    {
        homecards {
            id
            adId
            currencySymbol
            pricePerMonth
            photoUrls{
                homecardHidpi
            }
            title
        }
    }
`;

export const useHomeCards = () => {
  const [{ fetching, data = {}, error }] = useQuery({
    query: getHomeCardsQuery
  });

  return {
    loading: (fetching || !data) && !error,
    data: data.homecards || []
  };
};
