import React, {useContext} from 'react';
import '../../styles/sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './sidebatOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
import {Context} from "../../index";
import { useHistory } from 'react-router-dom';
import {BOOKMARKS_ROUTE, HOME_ROUTE, SEARCH_ROUTE, NOTIFICATION_ROUTE, CHAT_ROUTE, LISTS_ROUTE, PROFILE_ROUTE, MORE_ROUTE } from "../../utils/consts";

function Sidebar() {
    const {auth} = useContext(Context);
    const history = useHistory()

    return (
        <div className="sideBar">
            <TwitterIcon className="sideBar__twitterIcons" />

            <SidebarOption onClick={() => (history.push(HOME_ROUTE))} Icon={HomeIcon} text="Главная" active />
            <SidebarOption onClick={() => (history.push(SEARCH_ROUTE))} Icon={SearchIcon} text="Поиск" />
            <SidebarOption onClick={() => (history.push(NOTIFICATION_ROUTE))} Icon={NotificationsIcon} text="Уведомления" />
            <SidebarOption onClick={() => (history.push(CHAT_ROUTE))} Icon={MailOutlineIcon} text="Сообщения" />
            <SidebarOption onClick={() => (history.push(BOOKMARKS_ROUTE))} Icon={BookmarkBorderIcon} text="Закладки" />
            <SidebarOption onClick={() => (history.push(LISTS_ROUTE))} Icon={ListAltIcon} text="Списки" />
            <SidebarOption onClick={() => (history.push(PROFILE_ROUTE))} Icon={PermIdentityIcon} text="Профиль" />
            <SidebarOption onClick={() => (history.push(MORE_ROUTE))} Icon={MoreHorizIcon} text="Ещё" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Твитнуть</Button>
            <Button onClick={() => auth.signOut()} variant="outlined" fullWidth>Выйти</Button>
        </div>
    );
}

export default Sidebar;