[![Netlify Status](https://api.netlify.com/api/v1/badges/016a0350-2c3d-4570-935c-bc64dcf83994/deploy-status)](https://app.netlify.com/sites/peter-cars-gallery/deploys)

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
Deplyed to AWS Aplify on the [This link](https://main.dxmpwgnhb6a73.amplifyapp.com/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.



## Project Features:
* App is bootstrapped using **NEXT**, to handle Server-side Rendering 
* **Dynamic Routing** for (/Learn) & (/Shop) routes 
* **Responsive** carousel for mobile and desktop (mobile-first) 
* Using **Redux toolkit** as a state-manager (using the slice approach) 
* Using **VCC-UI** as a theme , config provider 
* Using **VCC-UI** as a component library 
* **E2E Testing** using **Cypress** 
* **UNIT testing** using React-testing-library and Jest with Cypress-Components 
* The project is deployed automatically via **CI/CD** on Netlify here: https://app.netlify.com/sites/peter-cars-gallery/overview
* Styled-components library is used to handle **css-in-js** 
* **Typescript** is using to maintain type safety all over the app 
* **Reusable** components are used to avoid tightly-coupled components 
* **Memoizing** expensive function to obtain high-performance app 
* **Conditional Rendering** for Filters ,when needed (if items per page > 4 ) 
* Custom **React Hook** to get current screen width

## running Test cases

First, run the development server:

```bash
npm run cypress
# or
yarn cypress
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
