const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state : {
        profilePage:{
            posts : [
                {id:1, name:'What\'s up', likesCount: 20},
                {id:2, name:'It\'s my first post', likesCount: 28},
                {id:3, name:'Hello', likesCount: 9},
                {id:4, name:'Its me', likesCount: 786}
            ],
            newPostText: 'it'
        },
        dialogesPage: {
            messages: [
                {id: 1, name: 'Hi', owner: 0, avatar: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'},
                {id: 2, name: 'How are you', owner: 0, avatar: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'},
                {id: 3, name: 'Fine', owner: 1, avatar: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg'},
                {id: 4, name: 'reura', owner: 1, avatar: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg'},
                {id: 5, name: 'Yo', owner: 0, avatar: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'},
                {id: 6, name: 'Yo',  owner: 1, avatar: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg'}
            ],
            dialogs: [
                {id: 1, name: 'Dima', avatar: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'},
                {id: 2, name: 'Sasha', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThuB5b0TO6F40mF3AZ0bvBXpCiwXuJLbTb9W2a_UPBBnh3A7mN&usqp=CAU'},
                {id: 3, name: 'Shura', avatar: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg'},
                {id: 4, name: 'Sveta', avatar: 'https://www.news4jax.com/resizer/b89RYEm5oAgzxJxWIGoyLJ9lZu8=/960x960/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/X462YQ4HIJEGHHX2I3LXRV4G7A.jpg'},
                {id: 5, name: 'Dima K', avatar: 'https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png'}
            ],
            newMessageBody:''
        },
        sidebar:{
            friends:[
                {id: 1, name: 'Dima', avatar: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'},
                {id: 2, name: 'Shura', avatar: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg'},
                {id: 3, name: 'Sveta', avatar: 'https://www.news4jax.com/resizer/b89RYEm5oAgzxJxWIGoyLJ9lZu8=/960x960/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/X462YQ4HIJEGHHX2I3LXRV4G7A.jpg'},
                {id: 4, name: 'Dima K', avatar: 'https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png'}
            ]
        }
    },
    _callSubscriber() {
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id:6,
                name: this._state.profilePage.newPostText,
                likesCount:0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type == UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type == UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if(action.type == SEND_MESSAGE){
            let body = this._state.dialogesPage.newMessageBody;
            this._state.dialogesPage.newMessageBody = '';
            this._state.dialogesPage.messages.push({id:8, name:body, owner:1, avatar: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg'});
            //
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

window.store = store;
export default store;