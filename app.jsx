const $container = document.getElementById('container');
const PLAYERS = [
    {
        name: "Jim Hoskinggg",
        score: 46,
        id: 1
    },
    {
        name: "Fred Flintyyy",
        score: 19,
        id: 2
    },
    {
        name: "Scott Mctominay",
        score: 78,
        id: 3
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
            <Counter />
        </div>
    );
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
}

const Counter = React.createClass({
    propTypes: {},
    getInitialState: () => {
        return {
            score: 0
        }
    },
    render: function() {
        return (
            <div className="player-score">
                <div className="counter">
                    <button className="counter-action decrement"> - </button>
                    <div className="counter-score">{this.state.score}</div>
                    <button className="counter-action increment"> + </button>
                </div>
            </div>
        )
    },
});



const Element = (props) => {
    return (
        <div className="scoreboard">
            <Header title={props.title}/>

            <div className="players">
                {props.players.map((player) => {
                    return <Player name={player.name} score={player.score} key={player.id}/>
                })}
            </div>

        </div>
    )
}

Element.propTypes = {
    title: React.PropTypes.string,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired
    })).isRequired
};

Element.defaultProps = {
    title:"Scoreboard"
};



ReactDOM.render(<Element players={PLAYERS}/>, $container);
