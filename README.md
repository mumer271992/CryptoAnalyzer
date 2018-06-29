# Challenge
## Problem

Create a webapp that allows for a simple analysis of crypto assets. The page should present a navigation bar with two pages:
* `/` - Market Overview
* `/liquidity` -  Liquidity analysis page

The app should fetch all the required data from the [coinmarketcap.com](https://coinmarketcap.com/) `/ticker` API endpoint.
By default `/ticker` endpoint returns top 100 coins. There should be an option to change it by using a select/dropdown with predefined values:

* 10
* 50
* 100
* all

Keep it mind select/dropdown should have global scope and it should affect data on both pages: Market Overview and Liquidity.

## Solution

I have create an SPA having two routes and a shared header with two links and a dropdown to change pagesize of coinmarketcap results. So that user can change page size from both pages and I have used Redux for for storing state of selected page size, so that it can be used in both pages to fetch data with same pagesize.

I have designed my app in a way that it should be scallable easily. I have divide my react components in two categories ( containers, presentaion components) container components are data providers( getting data from api/redux store). Presentation components are reusable component which will take data and present it these component does not concern how to get data or etc. All styling of app will be in these small reusable presentaional component so that if we have to change or UI library/framwork we will only update these component without changing business logic of app.

## Technology Choice

* For styling I have used bootstrap css and wrote custom styling using scss.
* For state management Redux, because we need to store user page size choice globally to use it in both pages. I used redux because it can easily mange state changes with component lifecycle methods we do not have to manually pass size as a prop to each page. Each page can get data from redux, and gets update according to state change.

### Note

I did not save coins list in redux store because I thought on both pages we should fetch fresh data from API so that user can analyze latest data.

## Next

On overview page I will add a filter to sort data in list.

## How to run 

Inside the folder run the following commands

`yarn install`

`yarn run dev-server`
