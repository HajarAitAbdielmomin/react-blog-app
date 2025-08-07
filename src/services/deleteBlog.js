
const deleteBlog = (id, history) => {

    fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE',
    }).then(() => {
        history.push('/');
    })
}

export default deleteBlog