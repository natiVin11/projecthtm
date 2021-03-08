function search() {

    var pagePath = window.location.pathname;
    var searchParam = ‘/search/’; //replace this with your page path before the search term
    if (pagePath.indexOf(searchParam) > -1) {
        return searchParam + ‘?s=’ + pagePath.split(searchParam)[1].split(‘/’)[0] }
    }