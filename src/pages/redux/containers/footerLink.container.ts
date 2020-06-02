import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions/todo/todo.action';
import { RootState } from '../reducers';
import { Filter } from '../../../shared/models/filter.model';
import { Dispatch } from 'react';
import { TodoActionType } from '../actions/todo/todo.actiontype';

export interface FooterLinkPropType {
  filter: Filter;
}

const mapStateToProps = (state: RootState, ownProps: FooterLinkPropType) => {
  return ({
    active: ownProps.filter.filter === state.visibilityFilter.filter
  })
}

// map diapatch
const mapDispatchToProps = (dispatch: Dispatch<TodoActionType>, ownProps: FooterLinkPropType) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)