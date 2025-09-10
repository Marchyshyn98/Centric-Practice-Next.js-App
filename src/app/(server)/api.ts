export async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

export async function getPostById(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

export async function getCommentsById(id: string) {
    const response = await fetch((`https://jsonplaceholder.typicode.com/posts/${id}/comments`));

    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}