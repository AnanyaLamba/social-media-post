import { createSlice } from "@reduxjs/toolkit";
import Posts from "../components/Posts/Posts";
const postsSlice = createSlice({
    name : "posts",
    initialState : {
        nextCommentId : 1,
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
                    {id: 0, userName: "Chiku" , text:"Nice Post!" , timeStamp: Date.now()},
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
                id:state.nextCommentId++,
                userName: "Ananya Lamba",
                text,
                timeStamp: Date.now(),
            });
        }
       },

       editComment:(state, action) =>{
        const {postId , commentId , updatedText} = action.payload;
        const post = state.posts.find((p)=> p.id === postId);
        if(post){
            const comment = post.comments.find((c)=> c.id === commentId);
            if(comment){
                comment.text = updatedText;
            }
        }
       },

       deleteComment:(state , action)=>{
        const {commentId , postId} = action.payload;
        console.log("Post ID:", postId);
        console.log("Comment ID:", commentId);
        const post = state.posts.find((p)=>p.id === postId);
        if(post){
            post.comments = post.comments.filter((c)=> c.id !== commentId);
        }
       },


    },
});
// selector for selecting a particular id
export const selectPostById = (state, postId) =>
    state.posts.posts.find((post) => post.id === postId);

 export const {toggleLike , addComment , editComment , deleteComment} = postsSlice.actions;
export default postsSlice.reducer;