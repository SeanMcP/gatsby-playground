import React from 'react';
import { Calendar } from 'react-feather';

const PostDate = ({ date, modifier }) => {
    return (
        <div className={`PostDate ${modifier ? `PostDate--${modifier}` : ''}`}>
            <Calendar size={20}/>
            <date className="PostDate__date">{date}</date>
        </div>
    );
};

export default PostDate;