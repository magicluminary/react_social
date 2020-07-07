import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";
import React from 'react';

let state={
    posts : [
        {id:1, name:'What\'s up', likesCount: 20},
        {id:2, name:'It\'s my first post', likesCount: 28},
        {id:3, name:'Hello', likesCount: 9},
        {id:4, name:'Its me', likesCount: 786}
    ],
    profile: null,
    status: ''
}

test('new post should be added', () => {

    let action = addPostActionCreator("it")

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(5);
});

test('new post text is correct', () => {

    let action = addPostActionCreator("it")

    let newState = profileReducer(state,action);

    expect(newState.posts[4].name).toBe("it");
});

test('after deleting', () => {

    let action = deletePostActionCreator(10)

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(4);
});