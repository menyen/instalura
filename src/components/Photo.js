import React, { Component } from 'react';

class PhotoUpdates extends Component {
    render() {
        return (
            <section className="photo-updates">
                <a href="#" className="photo-updates-like">Likar</a>
                <form className="photo-updates-form">
                    <input type="text" placeholder="Add a comment..." className="photo-updates-form-field" />
                    <input type="submit" value="Comment!" className="photo-updates-form-submit" />
                </form>

            </section>
        );
    }
}

class PhotoInfo extends Component {
    render() {
        return (
            <div className="photo-info">
                <div className="photo-info-likes">
                    {
                        this.props.photo.likers.map(liker => <a key={liker.login} href="#">liker.login, </a>)
                    }
                    curtiram
                </div>

                <p className="photo-info-caption">
                    <a className="photo-info-autor">{this.props.photo.loginUsuario}</a> {this.props.photo.comentario}
                </p>

                <ul className="photo-info-comments">
                    {
                        this.props.photo.comentarios.map(comment => {
                            <li className="comment" key={comment.id}>
                                <a className="photo-info-autor">{comment.login}</a> {comment.texto}
                            </li>
                        })
                    }

                </ul>
            </div>
        );
    }
}

class PhotoHeader extends Component {
    render() {
        return (
            <header className="photo-header">
                <figure className="photo-user">
                    <img src={this.props.photo.urlPerfil} />
                    <figcaption className="photo-user">
                        <a href="#">{this.props.photo.loginUsuario}</a>
                    </figcaption>
                </figure>
                <time className="photo-date">{this.props.photo.horario}</time>
            </header>
        );
    }
}

export default class Photo extends Component {
    render() {
        return (
            <div className="Photo">
                <PhotoHeader photo={this.props.photo} />
                <img alt="Photo" className="photo-src" src={this.props.photo.urlFoto} />
                <PhotoInfo photo={this.props.photo} />
                <PhotoUpdates />
            </div>
        );
    }
}