import React, {Suspense} from "react";
import { createBrowserRouter, Outlet } from 'react-router-dom';
import AppWrapper from "../ui/app-wrapper";

// @ts-ignore
const AuthModule = React.lazy(() => import("auth/AuthModule"));

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppWrapper />,
        children: [],
    },
    {
        path: "/auth/:action",
        element: (
            <Suspense fallback={<div>Загрузка аутентификации...</div>}>
                <AuthModule />
            </Suspense>
        ),
    },
]);