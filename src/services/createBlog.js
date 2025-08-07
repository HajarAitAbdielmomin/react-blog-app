const createBlog = (blog, history, updatePendingState) => {

    setTimeout(() => {
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            updatePendingState();
            //history.go(-1);
            history.push('/');

        })
    }, 1000);
}

export default createBlog