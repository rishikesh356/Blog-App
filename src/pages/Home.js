import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase-config';
//addDocs->add data to firebase
//getDocs -> get data from firebase
//deleteDocs->delete from firebase collection
//doc->specify which doc to delete
function Home({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "posts");//refer to posts collection
  const getPosts = async () => {
    try {
      const data = await getDocs(postCollectionRef);//gets the post data and used in useEffect to take effect on startup
      setPostLists(
        data.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        })) // convert the complex object to simple title text author
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);//get the particular post details,takes db,collection name,id passed as argument in deletepost button
    await deleteDoc(postDoc);//deletes particular post
    getPosts();
  };

  useEffect(() => {

    getPosts();//call getposts on startup of page
  }, []);//delete button checks if is authenticated and if post author id=== signed in user
  return (
    <div className="homePage">{postLists.map((post) => {
      return <div className='post'>
        <div className='postHeader'>
          <div className='title'>
            <h1>{post.title}</h1>
          </div>
          <div className='deletePost'>
            
            {isAuth && post.author.id === auth.currentUser.uid && (<button className='delBut' onClick={() => { deletePost(post.id) }}>
              &#128465;
            </button>
            )}
          </div>
        </div>
        <div className='postTextContainer'>{post.postText}</div>
        <h3>@{post.author.name}</h3>
      </div>
    })}</div>
  )
}

export default Home