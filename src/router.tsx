import { createBrowserRouter } from 'react-router-dom';
import { ChatLayout } from './layouts/ChatLayout';

export const router = createBrowserRouter([
    { path: '/', element: <ChatLayout /> },
]);
