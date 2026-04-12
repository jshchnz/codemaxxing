
/**
 * SpaceEncyclopediaApp
 * Main application class utilizing Singleton and Factory patterns for rendering space data.
 */
class SpaceEncyclopediaApp {
    constructor() {
        if (SpaceEncyclopediaApp.instance) {
            return SpaceEncyclopediaApp.instance;
        }
        this.data = typeof spaceData !== 'undefined' ? spaceData : [];
        SpaceEncyclopediaApp.instance = this;
    }

    /**
     * Initializes the application by triggering the render process.
     */
    init() {
        console.log("Inizializzazione Enciclopedia Spaziale");
        this.renderAll();
    }

    /**
     * Renders all data items into the main container.
     */
    renderAll() {
        const contentContainer = document.getElementById("content");
        if (!contentContainer) {
            console.error("Main content container not found.");
            return;
        }

        const fragment = document.createDocumentFragment();

        this.data.forEach(item => {
            const article = ArticleFactory.createArticle(item);
            fragment.appendChild(article);
        });

        contentContainer.appendChild(fragment);
    }
}

/**
 * ArticleFactory
 * Factory class for creating article DOM elements.
 */
class ArticleFactory {
    static createArticle(dataItem) {
        const article = document.createElement("article");
        article.className = "article-card";
        article.id = `article-${dataItem.id}`;

        const title = document.createElement("h2");
        title.textContent = dataItem.name;

        const desc = document.createElement("p");
        desc.textContent = dataItem.description;

        const details = document.createElement("div");
        details.innerHTML = `
            <ul>
                <li><strong>Type:</strong> ${dataItem.type}</li>
                <li><strong>Distance:</strong> ${dataItem.distance_ly} light years</li>
                <li><strong>Discovered by:</strong> ${dataItem.discovered_by} (${dataItem.discovery_year})</li>
            </ul>
        `;

        article.appendChild(title);
        article.appendChild(desc);
        article.appendChild(details);

        return article;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new SpaceEncyclopediaApp();
    app.init();
});
