import React,{useContext} from 'react';
import BlogsContext from '../context/blogs/BlogsContext';


const About = () => {

    const blogsContext=useContext(BlogsContext);
    const{addBlog,current,clearBlog,updateBlog}  = blogsContext;
    return (
        <div>
            <h4>This is about page demonstraed for routing purpose</h4>
            <button onClick = {addBlog}>Blog context - add</button>
            // similarly blog state se koi bhi functio run kr skte hain yaha import krke

            //AuthContext ka use kahin ni kiye hain bs folder me hai if use krna pra to
        </div>
    )
}

export default About
