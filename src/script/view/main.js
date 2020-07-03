import "../component/movie-list";
import "../component/app-header";
import "../component/app-footer";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchEl = document.querySelector("app-header");
    const itemsEl = document.querySelector("movie-list");
    
    const onSearch = async () => {
        try {
            const result = await DataSource.search(searchEl.value);
            onResult(result);
        } catch (error) {
            fallbackResult(error);
        }
    };

    const onResult = res => {
        itemsEl.items = res;
    };

    const fallbackResult = message => {
        itemsEl.renderError(message);
    };
    searchEl.onClickEvent = onSearch;
};

export default main;