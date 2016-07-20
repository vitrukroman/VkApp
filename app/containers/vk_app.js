import {connect} from 'react-redux'
import App from '../components/app';

const VkApp = connect(
    state => {
        return {
            clicks: state.get('clicks')
        };
    },
    dispatch => {
        return {
            onClick: () => dispatch({type: 'INCREMENT'})
        };
    }
)(App);


export default VkApp