import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log('Constructor called');

    this.state = {
      userInfo: {
        name: 'dummy',
        location: 'DefaultLocation',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/anirudhahavaldar');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log('componentDidMount() called');
  }

  componentDidUpdate() {
    console.log('Component did update called');
  }

  componentWillUnmount() {
    console.log('Component will unmount called');
  }

  render() {
    console.log('Render called');

    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
