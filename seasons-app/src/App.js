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
    }
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return(
            <div>Latitude: </div>
        )
    }
}

export default App;