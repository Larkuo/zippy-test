import {
    Dashboard,
    Login
} from "../pages";

export const APP_PAGES: {[index:string]: any} = {
    login: {
        component: Login,
        options: { headerShown: false },
    },
    dashboard: {
        component: Dashboard,
        options: { headerShown: false },
    },
};

export type AppParamList = typeof APP_PAGES;