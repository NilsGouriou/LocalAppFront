import React from 'react';

const styles = {
    authorBox: {
        flex: '0 0 15%',
        marginRight: '20px',
        marginLeft: '10px',
        padding: '10px',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        border: '2px solid black',
    },
    authorInfo: {
        fontWeight: 'bold',
        marginBottom: '5px',
        fontSize: '14px',
    },
};

const AuthorBoxSmallComponent = ({ author }) => {
    return (
        <div style={styles.authorBox}>
            <p style={styles.authorInfo}>Nom : {author.name}</p>
            <p style={styles.authorInfo}>Prénom : {author.surname}</p>
        </div>
    );
};

export default AuthorBoxSmallComponent;
