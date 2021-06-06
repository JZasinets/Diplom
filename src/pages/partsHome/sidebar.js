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
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from "../../utils/consts";
import {Context} from "../../index";

function Sidebar() {
    const {auth} = useContext(Context)

    return (
        <div className="sideBar">
            <TwitterIcon className="sideBar__twitterIcons" />

            <SidebarOption active Icon={HomeIcon} text="Главная" />
            <SidebarOption Icon={SearchIcon} text="Поиск" />
            <SidebarOption Icon={NotificationsIcon} text="Уведомления" />
            <SidebarOption Icon={MailOutlineIcon} text="Сообщения" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Закладки" />
            <SidebarOption Icon={ListAltIcon} text="Списки" />
            <SidebarOption Icon={PermIdentityIcon} text="Профиль" />
            <SidebarOption Icon={MoreHorizIcon} text="Ещё" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Твитнуть</Button>
            <NavLink to={LOGIN_ROUTE}>
                <Button onclick={() => auth.signOut()} variant="outlined" fullWidth>Выйти</Button>
            </NavLink>
        </div>
    );
}

export default Sidebar;