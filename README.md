# spotaroom

## Steps

- Run `yarn install` in root or `npm install` in each folder site and api.

- Run server `cd api && npm start`. Server is running by default on port 3000

- Build site `cd site && npm run build`. 
For run in development mode `cd site && npm start`. By default site build use .prod.env for environment variables. You can modify API_URL to point http://localhost:3000. 

I decide to use GraphQL, although exercise says REST. However, I implemented both ways and website is configured to accept one of this options. If you put `PROVIDER=fetch` in .prod.env, the website is configured to use fetch, by default is `PROVIDER=graphql`.
