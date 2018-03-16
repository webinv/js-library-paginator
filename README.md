# Paginator.js

JavaScript lib for calculate sliding pagination

## Install

- **bower**: `bower install webinv-paginator`
- **npm**: `npm install webinv-paginator`

## Usage

``` 
var paginate = paginator({
    range: 9, // Page range in sliding pagination
    currentPageNumber: 1, // curent page
    numItemsPerPage: 50, // items per page
    totalCount: 3452 // count of total elements
});
```

**Results**
``` 
{
   "current":1,
   "numItemsPerPage":50,
   "first":1,
   "totalCount":3452,
   "previous":null,
   "next":2,
   "pagesInRange":[1, 2, 3, 4, 5, 6, 7, 8,  9],
   "firstPageInRange":1,
   "lastPageInRange":9,
   "pageCount":70,
   "last":70
}
```