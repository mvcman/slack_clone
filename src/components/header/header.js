import React from 'react';
import './header.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';
import { Values } from '../../context'; 

export default function Header(){
    const [{ user }] = Values();
    return (
        <div className="header">
            <div className="header_left">
                <Avatar 
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder="search for ur team" type="text" />
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
            </div>
        </div>
    );
}