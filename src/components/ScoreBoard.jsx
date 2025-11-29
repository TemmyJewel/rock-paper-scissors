import './ScoreBoard.css';

function ScoreBoard({ score }) {
    return (
        <p className='score'>
            Wins: {score.wins} | Losses: {score.losses} | Ties: {score.ties}
        </p>
    );
}

export default ScoreBoard;
