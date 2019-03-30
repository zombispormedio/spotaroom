import React from 'react';
import { Provider, createClient } from 'urql';
import PropTypes from 'prop-types';
import { isGraphQLProvider } from './utils';

const url = process.env.API_URL;

console.log(url)

export const DataContext = React.createContext({});

const withDataFetchProvider = () => {
  const DataFetchProvider = ({ children }) => (
    <DataContext.Provider value={{ url }}>{children} </DataContext.Provider>
  );

  DataFetchProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  return DataFetchProvider;
};

const withDataGraphqlProvider = () => {
  const client = createClient({
    url: `${url}/graphql`
  });
  const DataGraphqlProvider = ({ children }) => (
    <Provider value={client}>{children} </Provider>
  );
  DataGraphqlProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  return DataGraphqlProvider;
};

export const DataProvider = isGraphQLProvider()
  ? withDataGraphqlProvider()
  : withDataFetchProvider();
