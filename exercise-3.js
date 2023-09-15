console.groupCollapsed('Exercise 3');

    //Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
    async function fetchPosts() {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            const res = await data.json();
            console.log('Async/Await:', res);
        
        //Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
        } catch (err) {
            console.log('err:', err);
        }
    }

    // Call the function to fetch posts
    fetchPosts();

console.groupEnd();