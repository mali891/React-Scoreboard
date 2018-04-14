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
    );
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
            <Counter score={props.score} onChange={props.onScoreChange} />
        </div>
    );
}


Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired
}

const Counter = (props) => {
    return (
        <div className="player-score">
            <div className="counter">
                <button className="counter-action decrement" onClick={() => {props.onChange(-1)}}> - </button>
                <div className="counter-score">{props.score}</div>
                <button className="counter-action increment" onClick={() => {props.onChange(+1)}}> + </button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
}


const Application = React.createClass({
    render: function() {
        return (
            <div className="scoreboard">
                <Header title={this.props.title}/>

                <div className="players">
                    {this.state.players.map((player) => {
                        return (
                            <Player
                                onScoreChange={this.onScoreChange}
                                name={player.name}
                                score={player.score}
                                key={player.id}
                            />
                        )
                    }.bind(this))}
                </div>

            </div>
        )
    },

    getInitialState: function() {
        return {
            players: this.props.initialPlayers
        }
    },

    onScoreChange: function(delta) {
        console.log(delta);
    },

    propTypes: {
        title: React.PropTypes.string,
        initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            score: React.PropTypes.number.isRequired,
            id: React.PropTypes.number.isRequired
        })).isRequired
    },

    getDefaultProps: function() {
        return {
            title: "Scoreboard"
        }
    }
});



ReactDOM.render(<Application initialPlayers={PLAYERS}/>, $container);
