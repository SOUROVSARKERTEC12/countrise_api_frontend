import { useRoutes } from "react-router-dom";
import { Countries } from "../pages/countries/Countries.jsx";
import { CountryPage } from "../pages/countryPage/CountryPage.jsx";

export const MainRoutes = () => {
    return useRoutes([
        {path:'/', element: <Countries />},
        {path:'/country/:name', element: <CountryPage />},
        {path:'/code/:code', element: <CountryPage />}
    ])
}