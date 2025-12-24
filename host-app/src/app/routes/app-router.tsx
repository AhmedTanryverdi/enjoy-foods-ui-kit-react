import React, {Suspense} from "react";
import { createBrowserRouter } from 'react-router-dom';
import AppWrapper from "../ui/app-wrapper";

// @ts-ignore
const AuthModule = React.lazy(() => import("auth/AuthModule"));

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppWrapper />,
    },
    {
        path: "/auth",
        element: (
            <Suspense fallback={<div>Загрузка аутентификации...</div>}>
                <AuthModule />
            </Suspense>
        ),
    },
]);