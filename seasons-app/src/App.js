import React from 'react';
import SeasonDisplay from './component/SeasonDisplay';
import Spinner from './component/Spinner';

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
    // Method 1: Constructor
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     }

    //     // Method 1
    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     (position) => {
    //     //         this.setState({
    //     //             lat: position.coords.latitude,
    //     //         })
    //     //     },
    //     //     (err) => {
    //     //         this.setState({
    //     //             errorMessage: err.message
    //     //         })
    //     //     }
    //     // );
    // }

    // Method 2: Constructor althernate state initialization (babeljs.io)
    state = {lat: null, errorMessage: ''}


    componentDidMount(){
        // Method 2
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        )
    }

    // helper function
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            //return <div>Latitude: {this.state.lat}</div>;
            return (
                <>
                    {/*Passing state as a prop*/}
                    <SeasonDisplay lat={this.state.lat}/>
                </>
            )
        }

        return <Spinner message="Please accept location request! :)" />;
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
        // Method 1: Conditional : Not efficient because if their is new requirement to add border
        

        // Method 2
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

export default App;