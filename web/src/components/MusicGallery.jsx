import { React } from 'react'
import Downloader from './Downloader';
import Title from './Title';

export default function MusicGallery() {

    const songs = [
        "https://www.youtube.com/embed/TyIIc9jbJ2w", //Mercurio
        "https://www.youtube.com/embed/KnAVcVgXWmw", //Venus
        "https://www.youtube.com/embed/g5PyqjXmlgo", //Tierra
        "https://www.youtube.com/embed/26YTVbweiI4", //Luna
        "https://www.youtube.com/embed/jK7uXff0-sU", //Marte
        "https://www.youtube.com/embed/sxKJfZ8bdjw",  //Jupiter
        "https://www.youtube.com/embed/johPxKUGljU", //Saturno
        "https://www.youtube.com/embed/LaCtMT4ilbU", //Urano
        "https://www.youtube.com/embed/KgvmKOovnvk" //Neptuno
    ];

    function renderSongs() {
        return songs.map((song, index) => {
            return (
                <div className="song-div">
                    <iframe key={index} className="song border border-light border-5 mx-4"  src={song} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Downloader index={index}></Downloader>
                </div>
            )
        })
    }


    return (
        <>{window.screen.height < 1000
            ? <div className="gallery" >
                <Title />
                {renderSongs()}
            </div>
            : <div className="gallery-pc" >
                <Title />
                {renderSongs()}
            </div>

        }</>

    )
}
