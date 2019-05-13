import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View
} from 'react-native';

import {styles} from './repo-page.style';
import { fetchData, receiveRepos, selectRepo } from '../../repos.action';
import { repositories } from '../../../utils/endpoints';
import RepoList from '../../../components/repo-list/repo-list.component';

// Exporting for testing purposes
export class RepoPage extends Component {
  
  static propTypes = {
    getRepos: PropTypes.func.isRequired,
    repos: PropTypes.object.isRequired,
    selectRepo: PropTypes.func,
    selected: PropTypes.bool,
  };
  
  
  componentDidMount() {
    this.props.getRepos();

  }
  
  render() {
    const { isLoading, repos, selected } = this.props.repos;
    return (
      <View style={styles.container}>
        {!repos || isLoading ?
          <Text style={styles.loading}>
            Loading...
          </Text>
          :
          <RepoList
            repos={repos}
            selected={selected}
            selectRepo={this.props.selectRepo}
          />
        }
      </View>
    );
  }
}


export default connect(
  (state) => ({ repos: state.repos }),
  (dispatch) => ({
    getRepos: () => dispatch(fetchData(repositories, receiveRepos)),
    selectRepo: (id) => dispatch(selectRepo(id))
  })
)(RepoPage);
