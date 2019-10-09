import * as React from 'react';



const Pagination: React.FC<any> = (props) => {
    const { postPerPage, totalPost, paginate, currentPage } = props;

    // WE NEED PAGES THAT WILL BE ITERATED AS FOLLOWS

    var pages :number[] = [];

        for(let i = 1; i<= Math.ceil(totalPost/postPerPage); i++) {
            pages.push(i)
        }

        const starIdx = (postPerPage * (currentPage -1))+1;
        const endIdx = postPerPage * currentPage;
        const currentPageIdx = pages.indexOf(currentPage);
        const pagestoShow = (currentPageIdx < 2)  ? 5: 3;
        const nextPagIndex =  currentPageIdx + pagestoShow;
        const prevPageIndex = (currentPageIdx < 2)  ? currentPageIdx : (currentPageIdx -2)
        const displayPages = pages.slice(prevPageIndex, nextPagIndex ) ;
        const shoDots = (nextPagIndex < pages.length) ? '....': '';

    return (
        <nav className="nav-pagination">
            <ul>
                <li>
                    Showing {starIdx} - {endIdx} of {totalPost}
                </li>
                
                     <li> <button disabled={(currentPage === pages[0])} className="back" onClick={() => paginate(currentPage-1)}>&laquo;</button></li>
                
                
                {displayPages.map(p => (
               [ <li 
                className={p === currentPage? 'active-span': 'p-span'} key={p}><button  onClick={() => paginate(p)}>{p}</button>
                </li> , <li> {(displayPages.indexOf(p) ===2) ? shoDots : ''}</li>
               ]  
                
                ))}
                
              {
                  (currentPage < pages.length) ? <li> <span className="next" onClick={() => paginate(currentPage+1)}>&raquo;</span></li> : ''
              }
                
            </ul>
        </nav>
    )
}

export default Pagination;