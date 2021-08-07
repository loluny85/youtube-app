import React from 'react';
import Link from 'next/Link'

const game = () => {
    return (
        <div className="flex-column align-center">
            <img src="https://media.giphy.com/media/K3CxZe1a2UgF9wd38r/giphy.gif" alt="giffy" height="400px"/>
            <div className="space-around">
                <Link href="/video">
                    <input type="button" value="Back to video" className="button primaryButton"/>
                </Link>
            </div>
        </div>
    );
};

export default game;