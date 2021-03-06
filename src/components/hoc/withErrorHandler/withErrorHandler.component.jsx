import React, { Component } from 'react';

import Aux from './../Auxiliary.component';
import Modal from './../../Modal/Modal.component';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({error: null});
            });

            axios.interceptors.response.use(null, error => {
                this.setState({error: error});
            });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}>
                        {this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }

}

export default withErrorHandler;