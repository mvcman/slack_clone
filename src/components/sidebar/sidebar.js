import React, { useEffect } from "react";
import './sidebar.css';
import SidebarOption from './sidebaroption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "../../firebase";

export default function Sidebar({ username }){
    const [channels, setChannels] = React.useState([]);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    name: doc.data().name
                })))
        ));
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Demo</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {username}
                    </h3>
                </div>
                <CreateIcon />
            </div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOption title="demo"/>
                <SidebarOption Icon={InboxIcon} title="Mention"/>
                <SidebarOption Icon={DraftsIcon} title="Saved"/>

                <SidebarOption Icon={BookmarkBorderIcon} title="Bookmark"/>

                <SidebarOption Icon={PeopleAltIcon} title="Pople"/>

                <SidebarOption Icon={AppsIcon} title="Apps" />

                <SidebarOption Icon={FileCopyIcon} title="Files"/>

                <SidebarOption Icon={ExpandLessIcon} title="Sheets"/>
                <hr />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" addChannelOption={true} />
                {
                    channels.map((channel, i) => (
                        <SidebarOption key={i} title={channel.name} id={channel.id} />
                    ))
                }
                <hr />
                <SidebarOption Icon={AddIcon} title="Add" />
        </div>
    )
}