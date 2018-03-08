import React, { Component } from 'react';
import Photo from './Photo';

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = { photos: [] }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
            .then(response => response.json())
            .then(photos => this.setState({ photos }))
    }

    render() {
        return (
            <div className="photos container">
            {
                this.state.photos.map(photo => <Photo key={photo.id} photo={photo} />)
            }
            </div>
        );
    }
}