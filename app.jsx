const $container = document.getElementById('container');
const players = [
    {
        name: "Jim Hoskinggg",
        score: 46
    },
    {
        name: "Fred Flintyyy",
        score: 19
    },
    {
        name: "Scott Mctominay",
        score: 78
    }
];

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired
}



const Player = (props) => {
    return (
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <Counter score={props.score}/>
        </div>
    );
}

Player.defaultProps = {
    name: 'Jim Hoskins',
    score: 46
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
}



const Counter = (props) => {
    return (
        <div className="player-score">
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score">{props.score}</div>
                <button className="counter-action increment"> + </button>
            </div>
        </div>
    );
}

Counter.defaultProps = {
    score: 46
}

Counter.propTypes = {
    score: React.PropTypes.number
}



const Element = (props) => {
    return (
        <div className="scoreboard">
            <Header title={props.title}/>

            <div className="players">
                <Player name={props.name} score={props.score}/>

                <Player name="Fred Dingleberry" score={34}/>
            </div>

        </div>
    )
}

Element.propTypes = {
    title: React.PropTypes.string
    players: React.PropTypes.array.isRequired
};

Element.defaultProps = {
    title:"Scoreboard"
};



ReactDOM.render(<Element/>, $container);
