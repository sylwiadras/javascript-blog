'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
  
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

  function generateTitleLinks(customSelector = ''){

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* [DONE] loop for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = '';

  for(let article of articles){

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');

    /* [DONE] find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* [DONE] insert link into titleList */

    html = html + linkHTML;

  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

function generateTags(){
  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* [DONE] START LOOP: for every article: */

  for(let article of articles){

    /* [DONE] find tags wrapper */

    const tagsList = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');

    /* [DONE] split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* [DONE] START LOOP: for each tag */

    for(let tag of articleTagsArray){

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a onclick="tagClickHandler(event)" href="#tag-' + tag + '">' + tag + '</a></li>'; 

      /* [DONE] add generated code to html variable */

      html = html + linkHTML;

    /* [DONE] END LOOP: for each tag */
    }

    /* [DONE] insert HTML of all the links into the tags wrapper */

    tagsList.innerHTML = html;

    const tags = article.querySelectorAll('.list .tags a');

  /* [DONE] END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = event.target; 

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */

  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */

  for(let activeTag of activeTags) {

    /* remove class active */

    activeTag.classList.remove('active');

  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */

  for(let tagLink of tagLinks){

    /* add class active */

    tagLink.classList.add('active');

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
  
}

function addClickListenersToTags(){
  /* find all links to tags */

    const tagLinks = document.querySelectorAll('a');

  /* START LOOP: for each link */

    for (let tagLink of tagLinks) {

      /* add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', tagClickHandler);

  /* END LOOP: for each link */
    }
}

addClickListenersToTags();

function generateAuthors(){
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /*START LOOP: for every article: */

  for(let article of articles){

    /*find authors wrapper */

    const authorList = article.querySelector(optArticleAuthorSelector);

    /* make html variable with empty string */

    let html = '';

    /*get authors from data-author attribute */

    const articleAuthor = article.getAttribute('data-author');

    /*generate HTML of the link */

    const linkHTML = '<a onclick="tagClickHandler(event)" href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';

    /*add generated code to html variable */

    html = html + linkHTML;

    /*insert HTML of all the links into the authors wrapper */

    authorList.innerHTML = html;

  /* END LOOP: for every article: */
  }
}

generateAuthors();

function authorClickHandler(event) {
   /* prevent default action for this event */

   event.preventDefault();

   /* make new constant named "clickedElement" and give it the value of "event.target" */
 
   const clickedElement = event.target; 
 
   /* make a new constant "href" and read the attribute "href" of the clicked element */
 
   const href = clickedElement.getAttribute('href');
   
   /* make a new constant "author" and extract author from the "href" constant */
 
   const author = href.replace('#author-', '');
   console.log(author);
 
   /* find all author links with class active */
 
   const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
 
   /* START LOOP: for each active author link */
 
   for(let activeAuthor of activeAuthors) {
 
     /* remove class active */
 
     activeAuthor.classList.remove('active');
 
   /* END LOOP: for each active author link */
   }
 
   /* find all author links with "href" attribute equal to the "href" constant */
 
   const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
 
   /* START LOOP: for each found author link */
 
   for(let authorLink of authorLinks){
 
     /* add class active */
 
     authorLink.classList.add('active');
 
   /* END LOOP: for each found author link */
   }
 
   /* execute function "generateTitleLinks" with article selector as argument */
 
   generateTitleLinks('[data-author="' + author + '"]');
   
 }
