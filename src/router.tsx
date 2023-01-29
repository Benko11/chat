import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './error-page';
import { ChatLayout } from './layouts/ChatLayout';

export const router = createBrowserRouter([
    { path: '/', element: <ChatLayout />, errorElement: <ErrorPage /> },
]);
