import React, { useEffect } from 'react'

function Detail(props) {
    
    const { location, history } = props

    useEffect( () => {
        if (location.state === undefined) {
            history.push('/');
        }
    })

    if (location.state) {
        return (
            <span>{location.state.title}</span>
        )
    } else {
        return null;
    }
}

export default Detail
