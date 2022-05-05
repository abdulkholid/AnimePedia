const query = `
query ($page: Int, $perPage: Int, $findID: Int) {
    Page(page: $page, perPage: $perPage) {
        media(id: $findID) {
            id
            title {
                romaji
                english
                native
            }
            seasonYear
            averageScore
            bannerImage
            genres
            description
            episodes
        }
    }
}  
`;
export default query;
