import React from 'react';
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/ava.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const users = [
        //     {
        //         id: 1,
        //         photos: {
        //             small: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
        //         },
        //         followed: true,
        //         name: 'Dmitry',
        //         status: 'Im a boss',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 2,
        //         photos: {
        //             small: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg',
        //         },
        //         followed: false,
        //         name: 'Sasja',
        //         status: 'Im a boss too',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     }
        // ]
        // this.props.setUsers(users)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={styles.pages}>
                    {pages.map(p => {
                            let page = this.props.currentPage === p ? styles.selectedPage : '';
                            return <span className={styles.page + ' ' + page}
                                         onClick={(e) => {
                                             this.onPageChanged(p)
                                         }}>{p}</span>
                        }
                    )}
                </div>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {
                    this.props.users.map(u =>
                        <div className={styles.user} key={u.id}>

                      <span>
                          <img className="avatar" src={u.photos.small != null ? u.photos.small : userPhoto}/>
                      </span>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}


                                <span>
                                    <span>{u.name}</span>
                                    <span>{u.status}</span>
                                </span>
                                <span>
                            <span>{"u.location.city"}</span>,
                            <span>{"u.location.country"}</span>
                        </span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;