import { createSlice } from "@reduxjs/toolkit";
import Posts from "../components/Posts/Posts";
const postsSlice = createSlice({
    name : "posts",
    initialState : {
        posts:[
            {
                id: 1,
                userName:"Lion",
                profilePicture: "https://picsum.photos/200/300",
                content: "This is my first post",
                image : "https://picsum.photos/200/300",
                likes :0,
                liked: false,
                comments: [
                    {userName: "Ananya Lamba" , text:"Nice Post!" , timeStamp: Date.now()},
                ]

            },
        ],
    },
    reducers: {
       toggleLike:(state , action)=>{
        const post = state.posts.find((p)=>p.id === action.payload);
        if(post)
        {
            if(post.liked){
                post.likes -=1;
            }
            else{
                post.likes +=1;
            }
            post.liked =!post.liked;
        }
       },

       addComment:(state , action) => {
        const {postId , text} = action.payload;
        const post = state.posts.find((p)=> p.id === postId);
        if(post){
            post.comments.push({
                userName: "prakriti gupta",
                text,
                timeStamp: Date.now(),
            });
        }
       }


    },
});
// slector for selecting a particular id
export const selectPostById = (state, postId) =>
    state.posts.posts.find((post) => post.id === postId);

 export const {toggleLike , addComment} = postsSlice.actions;
export default postsSlice.reducer;