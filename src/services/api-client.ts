import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'effcace4ff9347c5862f54be298c5082'
    }
})