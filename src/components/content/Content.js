import React from 'react'
import classes from './Content-style.css'

const Content = ({block}) => {
    return (
        <>
            <div className={classes.blockContent}>{block}</div>
        </>
    );
};

export default Content;
