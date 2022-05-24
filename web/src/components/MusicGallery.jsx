import React from 'react'
import { useState } from 'react'

export default function MusicGallery() {

    const [songs, setSongs] = useState([
        "https://www.youtube.com/embed/TyIIc9jbJ2w", //Mercurio
        "https://www.youtube.com/embed/KnAVcVgXWmw", //Venus
        "https://www.youtube.com/embed/g5PyqjXmlgo", //Tierra
        "https://www.youtube.com/embed/26YTVbweiI4", //Luna
        "https://www.youtube.com/embed/jK7uXff0-sU", //Marte
        "https://www.youtube.com/embed/sxKJfZ8bdjw",  //Jupiter
        "https://www.youtube.com/embed/johPxKUGljU", //Saturno
        "https://www.youtube.com/embed/LaCtMT4ilbU", //Urano
        "https://www.youtube.com/embed/KgvmKOovnvk" //Neptuno
    ]);

    function renderSongs(){
        return songs.map((song, index) => {
            return (
                <div  style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <iframe key={index} className="song border border-light border-5" width="560" height="315"  src={song} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </div>
            )
        })
    }


  return (

    <div className="gallery">
        <div className="title" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <b>Widroz</b> <span>🎶</span>
         </div>
        {renderSongs()}
    </div>

  )
}
