import './PlayButtons.css';

function PlayButtons({ playGame, isDisabled, rockImg, paperImg, scissorsImg }) {
    return (
        <div className="btn-container">
            <button 
                onClick={() => playGame("rock")}
                className="play-btn"
                disabled={isDisabled}
            >
                <img src={rockImg} alt="rock" />
            </button>
            <button 
                onClick={() => playGame("paper")}
                className="play-btn"
                disabled={isDisabled}
            >
                <img src={paperImg} alt="paper" />
            </button>
            <button 
                onClick={() => playGame("scissors")}
                className="play-btn"
                disabled={isDisabled}
            >
                <img src={scissorsImg} alt="scissors" />
            </button>
            </div>
        
    )
}

export default PlayButtons;