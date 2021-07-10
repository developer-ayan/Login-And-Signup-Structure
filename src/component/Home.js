import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
// import { getUser, getAllUsers, sendMessage } from '../store/action'
import { useEffect, useState } from 'react';

function Home() {
    const { id } = useParams()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getUser(id))
    //     dispatch(getAllUsers())
    // }, [])

    // const send_message = () => {
    //     dispatch(sendMessage(message, user, currentChat))
    // }

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;
