import React from 'react'
//process.env.PUBLIC_URL

export default function Downloader({ index }) {
    const song_names=["Mercurio","Venus","Tierra","Luna","Marte","Jupiter","Saturno","Urano","Neptuno"];
    
    const song_symbols= ["☿","♀","♁","☽","♂","♃","♄","♅","♆"];

    const midi_files = [
        "/mercurio/Mercurio.mid",
        "/venus/Venus.mid",
        "/tierra/Tierra.mid",
        "/luna/Luna.mid",
        "/marte/Marte.mid",
        "/jupiter/Jupiter.mid",
        "/saturno/Saturno.mid",
        "/urano/Urano.mid",
    ]

    const pdf_files = [
        "/mercurio/Mercurio.pdf",
        "/venus/Venus.pdf",
        "/tierra/Tierra.pdf",
        "/luna/Luna.pdf",
        "/marte/Marte.pdf",
        "/jupiter/Jupiter.pdf",
        "/saturno/Saturno.pdf",
        "/urano/Urano.pdf",
    ]

    return (
        <>{index !== 8
            ? <div className="downloader">
            <p>Download:</p>
            <a className="download" href={`${process.env.PUBLIC_URL}${midi_files[index]}`} download>{song_symbols[index]} original Midi.</a>
            <a className="download" href={`${process.env.PUBLIC_URL}${pdf_files[index]}`} download>{song_symbols[index]} PDF music sheet.</a>
            </div>
            : <p className="sold">♆ &nbsp;was sold: files are not available.</p>}</>
    )
}
