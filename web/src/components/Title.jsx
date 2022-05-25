import React from 'react'

export default function Title() {

    
    const handleClickIcon = () => {
        window.location.reload(false);
    }

    return (
        <div className="title">
            <b>Guanes&nbsp;&nbsp;&nbsp;&nbsp;</b>
            <button className="icon-button" onClick={handleClickIcon}>
                <span>🎶</span>
            </button>
        </div>
    )
}
