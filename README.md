# Currency Converter

The 'Currency Converter' project is a web application for currency conversion. The application allows users to convert the value of one currency to another based on the current exchange rates.

## Main Features

- Conversion of currencies based on the most recent exchange rates.
- Supports many global currencies.
- Ability to switch the source and target currency.

## How to Use

1. Select the source currency and enter the amount you wish to convert.
2. Select the target currency.
3. The converted amount will be displayed immediately.

## Live Preview of the Application

The application is deployed and can be accessed via the following link:

[Link to Currency Converter](https://waehrungsrechner.vercel.app/)

## Used Technologies

- **ReactJS**: The project is built with React. It's a JavaScript library for building user interfaces.
  - **useState Hook**: This hook is used for managing state in functional components. In the provided code, useState is used to manage the state of `fromCurrency`, `toCurrency`, `amount`, `exchangeRate`, and `isLoading`.
  - **useEffect Hook**: This hook is used for handling side effects in functional components. In the provided code, useEffect is used to update the exchange rates whenever the `fromCurrency` or `toCurrency` changes.
- **CSS**: CSS was used to style the application and enhance its appearance.
- **Exchange Rate API**: This project uses the Exchange Rate API to fetch the most recent currency exchange rates.

