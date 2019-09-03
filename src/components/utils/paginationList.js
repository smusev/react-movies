export const paginationList = (page, totalPages) => {
  const separator = '...';
  const listPages = [];

  if (totalPages <= 10) {
    for (let i=1; i <= totalPages; i++){
      listPages.push(i);
    }

  } else if (page < 5) {
    for (let i=1; i <= page; i++ ){
      listPages.push(i);
    }
    listPages.push(page+1, page+2, separator, totalPages-2, totalPages-1, totalPages);

  } else if (page > totalPages-4){
    listPages.push(1, 2, separator, page-2, page-1);
    for (let i=page; i <= totalPages; i++){
      listPages.push(i);
    }


  } else {
    listPages.push(
      1, 2, separator,
      page-1, page, page+1,
      separator, totalPages-1, totalPages,
    );
  }

  return listPages;
}
