import React from 'react';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return(
//         <div>Hii There!</div>
//     )
// }

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                })
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );
    }
    render(){
        // return(
        //     <div className="ui content">
        //         Latitude: {this.state.lat}
        //         <br/>
        //         Error: {this.state.errorMessage}
        //     </div>
        // )
        // Conditional Rendering
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading......</div>;
    }
}

export default App;