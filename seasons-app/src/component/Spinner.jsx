import React from 'react'

const Spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui text loader">{props.message}</div>
        </div>
    )
}

// If user forgot to pass message as a prop in Spinner component
// Show default message
Spinner.defaultProps = {
    message : 'Loading...'
}

export default Spinner
