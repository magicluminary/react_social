import React from 'react';
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/ava.jpg'

let Users = (props) => {
    let getUsers = () => {


        if (props.users.length === 0) {
            const users = [
                {
                    id: 1,
                    photo: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
                    followed: true,
                    name: 'Dmitry',
                    status: 'Im a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photo: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg',
                    followed: false,
                    name: 'Sasja',
                    status: 'Im a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                }
            ]

            props.setUsers(users)

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                      <div>
                          {/*<img className="avatar" src={u.photos.small != null ? u.photos.small : userPhoto }/>*/}
                      </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                      </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;