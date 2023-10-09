import React, { Component } from 'react';
import AuthorBoxSmallComponent from './AuthorBoxSmallComponent'; // Import the AuthorBoxSmallComponent

const styles = {
    messageContainer: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        marginBottom: '10px',
        padding: '10px',
        maxHeight: '200px',
    },
    messageContent: {
        flex: 1,
    },
    messageBody: {
        fontSize: '16px',
        lineHeight: '1.5',
    },
};

class MessageComponent extends Component {
    render() {
        const { message } = this.props;

        return (
            <div style={styles.messageContainer}>
                <AuthorBoxSmallComponent author={message.author} />
                <div style={styles.messageContent}>
                    <p style={styles.messageBody}>{message.body}</p>
                </div>
            </div>
        );
    }
}

export default MessageComponent;
