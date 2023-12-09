import React, { useEffect, useState } from 'react';
import { getPlaylist } from '../../api/get';
import './library.css';
import { nullPlaylist } from '../../api/emptyModels';
import { IconContext } from 'react-icons';
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Library() {
  const playlistFun = getPlaylist;
  // var playlist;
  const [playlists, setPlaylists] = useState(nullPlaylist);

  useEffect(() => {
    playlistFun(1)
    .then(function (response) {
      // var playlist = response
      // console.log(response);
      setPlaylists(response)
      // console.log(playlists);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } })
  }

  return (
    <div className='screen-container'>
      <div className='library-body'>
        {playlists?.map((playlist) => 
          <div className='playlist-card' key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
            {/* console.log("playlist") */}
            {/* {playlist} */}
            <img src={playlist.image.url} className='playlist-image' alt='Playlist-Art'/>
            <p className='playlist-title'>{playlist.name}</p>
            <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
            <div className='playlist-fade'>
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <FaPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        
        )}
      </div>
    </div>
  )
}
