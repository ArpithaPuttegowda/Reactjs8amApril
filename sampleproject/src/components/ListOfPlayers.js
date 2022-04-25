import React, {Component} from "react";

export default class ListOfPlayers extends Component {
  state = {
    players: [],
    isStyle: false
  };
  onShowPlayer = () => {
    let player = this.refs.player.value;
    // this.setState((prev) => {
    //   return {
    //     player: `${prev.player} Ranchi`
    //   };
    // });
    this.refs.player.value = "";
    this.setState(
      {
        players: this.state.players.includes(player)
          ? [...this.state.players]
          : [...this.state.players, player]
      },
      () => console.log(this.state.players)
    );
  };

  handleStyle = () => {
    this.setState({
      isStyle: !this.state.isStyle
    });
  };

  render() {
    return (
      <div>
        <input ref="player" />
        <button onClick={this.onShowPlayer}>Show Player List</button>
        {this.state.players.map((name, i) => {
          return <ListOfPlayer name={name} />;
        })}
      </div>
    );
  }
}

class ListOfPlayer extends React.Component {
  state = {
    isStyle: false
  };
  onStyleChange = () => {
    this.setState({
      isStyle: !this.state.isStyle
    });
  };
  render() {
    return (
      <h1
        style={{color: this.state.isStyle ? "red" : "blue"}}
        onClick={this.onStyleChange}
        key={`${this.props.name}`}
      >
        {this.props.name}
      </h1>
    );
  }
}
