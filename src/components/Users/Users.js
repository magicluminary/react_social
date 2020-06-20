import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0)
        props.setUsers(
            [
                {
                    id: 1,
                    photo: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
                    followed: true,
                    fullName: 'Dmitry',
                    status: 'Im a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photo: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg',
                    followed: false,
                    fullName: 'Sasja',
                    status: 'Im a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photo: 'https://www.news4jax.com/resizer/b89RYEm5oAgzxJxWIGoyLJ9lZu8=/960x960/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/X462YQ4HIJEGHHX2I3LXRV4G7A.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'Im a boss also',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                      <div>
                          <img className="avatar" src={u.photo}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;