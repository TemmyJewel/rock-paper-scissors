import './Controls.css';

function Controls({resetScore, autoPlay}) {
    return(
        <div className="controls-container">
            <button className="control-btn" onClick={resetScore}>
                Reset Score
            </button>
            <button className="control-btn" onClick={autoPlay}>
                Auto Play
            </button>
        </div>
    )
}

export default Controls;