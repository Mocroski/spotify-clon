import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';



function Sidebar() {
    const [{playlists }, dipatch] = useDataLayerValue();
    return (
        <div className='sidebar'>
            <img 
             className='sidebar_logo'
             src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"  alt=""/>

             <SidebarOption HomeIcon title="Home" />
             <SidebarOption Icon={SearchIcon} title="Search" />
             <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
             <strong className='sidebar_title'>PLAYLIST</strong>
             <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
             

             <SidebarOption title='Hip Hop' />
             <SidebarOption title='Rock' />
             <SidebarOption title='Pop' />
        </div>
    );
}

export default Sidebar;
