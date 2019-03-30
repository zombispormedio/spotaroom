import { useState, useEffect, useContext } from 'react';
import { useQuery } from 'urql';
import { isGraphQLProvider, DataContext } from '../Data';


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

const useHomeCardsWithGraphQL = () => {
  const [{ fetching, data = {}, error }] = useQuery({
    query: getHomeCardsQuery
  });

  return {
    loading: (fetching || !data) && !error,
    data: data.homecards || []
  };
};

const useHomeCardsWithFetch = () => {
	const { url } = useContext(DataContext);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
		let mounted = true;
		fetch(`${url}/api/homecards`)
		.then(res => res.json())
		.then(({ homecards} ) => mounted && setData(homecards))
		.finally(() => mounted && setLoading(false))
		return () => {
			mounted = false;
		}
	}, [])

  return {
   loading, 
   data
  };
};


export const useHomeCards = isGraphQLProvider() ? useHomeCardsWithGraphQL: useHomeCardsWithFetch
