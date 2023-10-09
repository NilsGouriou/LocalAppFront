import React, { Component } from 'react';
import CityPostService from '../../controller/CityPostService';
import axios from "axios";
import UserService from "../../controller/UserService";
import AuthorBoxComponent from "../../AuthorBoxComponent";
import MessageComponent from "../../MessageComponent";
import CreateCityMessageComponent from "./CreateCityMessageComponent";

const styles = {
    container: {
        display: 'flex',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        padding: '20px',
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    body: {
        fontSize: '16px',
        lineHeight: '1.5',
    },
    messageInputContainer: {
        marginTop: '20px', // Add some space between the messages and the input
    },
    messageInput: {
        width: '100%', // Make the input take the full width
        padding: '10px',
        fontSize: '16px',
    },
};

class CityPostViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.id,
            post: null,
            messages: [],
            newMessage: '', // Store the new message input
        };
    }

    componentDidMount() {
        axios.all([
            CityPostService.getCityPost(this.state.postId),
            CityPostService.getCityPostMessages(this.state.postId),
        ]).then(axios.spread((res1, res2) => {
            this.setState({
                post: res1.data,
                messages: res2.data,
            });
            console.log(this.state.post);
        }));
    }

    render() {
        const { post, messages, newMessage } = this.state;

        return (
            <div>
                <div style={styles.container}>
                    {post && <AuthorBoxComponent author={post.author} />}
                    {post && (
                        <div style={styles.content}>
                            <h1 style={styles.title}>Titre : {post.title}</h1>
                            <p style={styles.body}>{post.body}</p>
                        </div>
                    )}
                </div>
                <div>
                    {messages.map((message) => (
                        <MessageComponent key={message.cityMessageId} message={message} />
                    ))}
                </div>
                <div>
                    <CreateCityMessageComponent user={this.props.user} cityPost={this.state.post}/>
                </div>
            </div>
        );
    }
}

export default CityPostViewComponent;
