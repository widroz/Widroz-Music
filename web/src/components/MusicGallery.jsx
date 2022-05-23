import React from 'react'
import { useState } from 'react'

export default function MusicGallery() {

    const [songs, setSongs] = useState([
        "https://www.youtube.com/embed/TOaDNN9Q96w",
        "https://www.youtube.com/embed/tuU6LXVu6_I",
        "https://www.youtube.com/embed/dqcfOJlaIro",
        "https://www.youtube.com/embed/wrZFIgcTkuM",
        "https://www.youtube.com/embed/2_wLOuvjcq8"
    ]);

    function renderSongs(){
        return songs.map((song, index) => {
            return (
                <div  style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <iframe className="song border border-light border-5" width="560" height="315"  src={song} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="mx-5" style={{color:'white'}}>example</div>
                </div>
            )
        })
    }


  return (

    <div className="gallery">
        <div className="title" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        Widroz <span>🎶</span>
         </div>
        {renderSongs()}
    </div>

  )
}
