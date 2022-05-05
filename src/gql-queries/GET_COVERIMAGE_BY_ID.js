const query = `
query ($page: Int, $perPage: Int, $findID: Int) {
    Page(page: $page, perPage: $perPage) {
        media(id: $findID) {
            id
            coverImage {
                medium
            }
        }
    }
}  
`;
export default query;
