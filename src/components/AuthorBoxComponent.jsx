import React, { Component } from 'react';

const styles = {
    authorBox: {
        flex: '0 0 20%', // Specify a width for the author box
        marginRight: '20px',
        padding: '10px',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        border: '2px solid black',
    },
    authorTitle: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
};

class AuthorBoxComponent extends Component {
    render() {
        const { author } = this.props;

        return (
            <div style={styles.authorBox}>
                <h3>Auteur :</h3>
                <p style={styles.authorTitle}>Nom: {author.name}</p>
                <p>Prénom: {author.surname}</p>
            </div>
        );
    }
}

export default AuthorBoxComponent;
