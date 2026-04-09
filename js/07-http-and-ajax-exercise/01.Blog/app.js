function attachEvents() {
    const BASE_URL = 'http://localhost:3030'
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');
    const postsEl = document.getElementById('posts');
    const postComments = document.getElementById('post-comments');

    loadPostsBtn.addEventListener('click', async (event) => {
        const response = await fetch(`${BASE_URL}/jsonstore/blog/posts`)
        const postsRaw = await response.json()
        const postsObjs = Object.values(postsRaw)

        if (postsObjs.length < 1) {
            return
        }

        postsEl.innerHTML = ''
        createAndAppendOptions(postsObjs)
    }
    )

    viewPostsBtn.addEventListener('click', async (event) => {
        const selectedPostId = postsEl.value

        if (!selectedPostId || selectedPostId.trim() === '') {
            return;
        }

        const response = await fetch(`${BASE_URL}/jsonstore/blog/posts/${selectedPostId}`)
        const postRaw = await response.json()

        if (postsEl.children.length < 1) {
            return
        }

        const postTitleEl = document.getElementById('post-title')
        const postBodyEl = document.getElementById('post-body')
        postTitleEl.textContent = postRaw.title
        postBodyEl.textContent = postRaw.body

        const commentsResponse = await fetch(`${BASE_URL}/jsonstore/blog/comments`)
        const commentsRaw = await commentsResponse.json()
        const commentsObjs = Object.values(commentsRaw)

        const filteredComments = commentsObjs.filter(x => x.postId == selectedPostId)

        postComments.innerHTML = ''
        for (const comment of filteredComments) {
            const commentId = comment.id
            const commentText = comment.text
            const commentUlEl = document.createElement('li')
            commentUlEl.id = commentId
            commentUlEl.textContent = commentText
            postComments.append(commentUlEl)
        }
    })

    function createAndAppendOptions(postsObjs) {
        for (const post of postsObjs) {
            const optionEl = document.createElement('option')
            optionEl.value = post.id
            optionEl.textContent = post.title // not sure if shouldn't be uppercase
            postsEl.append(optionEl)
        }

        // Automatically select the first option
        if (postsObjs.length > 0) {
            postsEl.value = postsObjs[0].id;
        }
    }

}

attachEvents();