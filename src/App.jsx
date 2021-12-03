import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Posts from './components/Posts';
import Pagination from './components/Pagination';


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)       //  Кайси сахифада турибмиз
  const [postsPerPage] = useState(10)   // Битта сахифада нечта маълумот булиши курсатиляпти

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])


  // ****************  Get current post

 
  const indexOfLastPost = currentPage * postsPerPage  // Битта сахифада нечтадан дата булишини курсатяпти (1 * 10 = 10)
 
  const indexOfFirtsPost = indexOfLastPost - postsPerPage //  Биринчи сахифага утамиз ( 10 - 10 = 0)  0 чи сахифага утамиз
  
  const currentPosts = posts.slice(indexOfFirtsPost, indexOfLastPost)  //  биринчи маълумотдан то охирги маълумотгача перемнныйда курсатилган (0 дан 10 гача)
 
 // ****************  Change pageNumbers

 const paginate = ((pageNumber) => {
   return (
     setCurrentPage(pageNumber)
   )
 })

  return (
    <div className="app__container">
      <h1>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
