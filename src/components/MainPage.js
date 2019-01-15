import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

export class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots() {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }
  render() {
    const { onSearchChange, isPending } = this.props;
    const filteredRobots = this.filterRobots();

    if (isPending) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
};