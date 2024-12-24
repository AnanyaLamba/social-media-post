// import { createSlice } from "@reduxjs/toolkit";
// const postsSlice = createSlice({
//     name : "posts",
//     initialState : {
//         posts:[
//             {
//                 id: 1,
//                 name:"Lion",
//                 profilePicture: "https://picsum.photos/200/300",
//                 content: "This is my first post",
//                 image : "https://picsum.photos/200/300",
//                 timestamp : Date.now(),
//                 likes :0,
//                 comments: []

//             },
//         ],
//     },
//     reducers: {
//         likePosts: (state, action) => {
//             const post = state.posts.find(post => post.id === action.payload); // Find post by ID
//             if (post) {
//                 post.likes += 1; // Increment likes
//             }
//         },
//     },
// });
 
// export default postsSlice;