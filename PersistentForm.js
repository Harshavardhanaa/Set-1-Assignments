import { useState, useEffect } from 'react';

function PersistentForm() {
    const [title, setTitle] = useState(localStorage.getItem('title') || '');
    const [body, setBody] = useState(localStorage.getItem('body') || '');

    useEffect(() => {
        localStorage.setItem('title', title);
    }, [title]);

    useEffect(() => {
        localStorage.setItem('body', body);
    }, [body]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // If you want to clear local storage on form submission
        // localStorage.removeItem('title');
        // localStorage.removeItem('body');
        setTitle('');
        setBody('');
    };

    return (
        <div>
            <h2>Story Book</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label> <br />
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                /> <br /> 

                <label>Body</label> <br /> 
                <textarea 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                ></textarea> <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default PersistentForm;
