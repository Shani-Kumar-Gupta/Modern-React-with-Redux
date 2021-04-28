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
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                })
            },
            (err) => console.log(err)
        );
    }
    render(){
        return(
            <div>Latitude: {this.state.lat}</div>
        )
    }
}

export default App;