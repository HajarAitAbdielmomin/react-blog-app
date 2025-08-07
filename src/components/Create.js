import {useState} from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history=useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body,author};
        setIsPending(true);
        setTimeout(() => {
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');

        })
    }, 1000);
    }
    return (

        <div className="create">
            <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Add a new blog</h2>
            <div
                className="create-container"
                style={{
                    display: 'flex',
                    gap: '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}
            >
                {/* Image Section */}
                <div
                    className="image-section"
                    style={{
                        flex: '0 0 350px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        src="/newentry.svg"
                        alt="New entry"
                        style={{
                            width: '100%',
                            maxWidth: '350px',
                            height: 'auto'
                        }}
                    />
                </div>

                {/* Form Section */}
                <div
                    className="form-section"
                    style={{
                        flex: '0 0 400px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <label>Blog title:</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label>Blog body:</label>
                        <textarea
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>

                        <label>Blog author:</label>
                        <select
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        >
                            <option value="mario">mario</option>
                            <option value="hajar">hajar</option>
                            <option value="kazuha">kazuha</option>
                        </select>
                        {!isPending && <button>Add Blog</button>}
                        {isPending && <button disabled>Adding Blog. . .</button>}
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Create;