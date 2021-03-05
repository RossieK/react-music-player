const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt=""></img>
            <h1>{currentSong.name}</h1>
            <h1>{currentSong.artist}</h1>
        </div>
    );
}

export default Song;