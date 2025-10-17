function getArticleGenerator(articles) {
    const remainingArticles = [...articles];

    function generateArticle() {
        if (remainingArticles.length === 0) {
            return;
        }

        const divRef = document.getElementById('content');
        const articleText = remainingArticles.shift();
        const articleEl = document.createElement('article');
        articleEl.textContent = articleText;
        divRef.appendChild(articleEl);
    }

    return generateArticle;
}