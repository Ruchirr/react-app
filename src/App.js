import React from 'react';
import './App.css';
class App extends React.Component {
    render() {
        return <h1>Hello {this.props.message}!</h1>;
    }
}
// function Welcome(props){
//   return <h1>Hello, {props.name} </h1>
// }
// const element =  <Welcome name="sara" />
// React.Dom.render( element, document.getElementById('root'));
export default App;
