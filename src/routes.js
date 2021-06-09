import { LOGIN_ROUTE, HOME_ROUTE, BOOKMARKS_ROUTE, SEARCH_ROUTE, NOTIFICATION_ROUTE, CHAT_ROUTE, LISTS_ROUTE, PROFILE_ROUTE, MORE_ROUTE } from "./utils/consts";
import { Home } from './pages/home';
import { SignIn } from "./pages/SignIn.tsx";
import { Bookmarks } from './pages/Bookmarks';
import { Search } from "./pages/search";
import { Notification } from './pages/notification';
import { Chat } from './pages/chat';
import { Lists } from "./pages/lists";
import { Profile } from "./pages/profile";
import { More } from "./pages/more";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: SignIn
    }
]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        component: Home
    },

    {
        path: SEARCH_ROUTE,
        component: Search
    },

    {
        path: NOTIFICATION_ROUTE,
        component: Notification
    },

    {
        path: BOOKMARKS_ROUTE,
        component: Bookmarks
    },

    {
        path: CHAT_ROUTE,
        component: Chat
    },

    {
        path: LISTS_ROUTE,
        component: Lists
    },

    {
        path: PROFILE_ROUTE,
        component: Profile
    },

    {
        path: MORE_ROUTE,
        component: More
    },
]
