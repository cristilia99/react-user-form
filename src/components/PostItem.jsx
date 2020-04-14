import React from 'react';

function PostItem(props) {
    const { id, title, body } = props;

    return(
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default PostItem;