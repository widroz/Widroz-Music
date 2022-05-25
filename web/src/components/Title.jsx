import React from 'react'

export default function Title() {

    
    const handleClickIcon = () => {
        window.location.reload(false);
    }

    return (
        <div className="title">
            <b>Widroz&nbsp;&nbsp;</b>
            <button className="icon-button" onClick={handleClickIcon}>
                <span>🎶</span>
            </button>
        </div>
    )
}
