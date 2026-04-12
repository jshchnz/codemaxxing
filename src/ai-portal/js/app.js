
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Header
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>AI Evolution Nexus</h1>
        <p>The foremost portal for news, analysis, and research on Artificial Intelligence</p>
    `;
    app.appendChild(header);

    // Controls
    const controls = document.createElement('div');
    controls.className = 'container';
    controls.innerHTML = `
        <input type="text" id="searchInput" placeholder="Search articles..." style="padding: 0.5rem; width: 100%; max-width: 400px; margin-bottom: 1rem; background: #112240; border: 1px solid #233554; color: #ccd6f6;">
        <div id="stats" class="meta"></div>
    `;
    app.appendChild(controls);

    // Main container
    const main = document.createElement('main');
    main.className = 'container grid';
    main.id = 'articles-container';
    app.appendChild(main);

    // Render function
    function renderArticles(articles) {
        const container = document.getElementById('articles-container');
        container.innerHTML = '';

        const stats = document.getElementById('stats');
        stats.innerText = `Showing ${articles.length} articles`;

        // Render only first 100 to avoid freezing the browser
        const toRender = articles.slice(0, 100);

        toRender.forEach(article => {
            const card = document.createElement('div');
            card.className = 'card';

            const tagsHtml = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            card.innerHTML = `
                <h3>${article.title}</h3>
                <div class="meta">By ${article.author} | ${article.date} | ${article.category}</div>
                <p>${article.content.substring(0, 150)}...</p>
                <div>${tagsHtml}</div>
                <div class="meta mt-10">
                    Tech Complexity: ${article.analysis.technical_complexity}/10 |
                    Impact: ${article.analysis.societal_impact}/10
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Initial render
    renderArticles(aiNewsDataset);

    // Search logic
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const term = e.target['value'].toLowerCase();
        const filtered = aiNewsDataset.filter(a =>
            a.title.toLowerCase().includes(term) ||
            a.content.toLowerCase().includes(term) ||
            a.category.toLowerCase().includes(term)
        );
        renderArticles(filtered);
    });
});
