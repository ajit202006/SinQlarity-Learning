const express=require("express");

const book_controller=require('../controllers/bookController');
const author_controller=require('../controllers/authorController');
const bookinstance_controller=require('../controllers/bookInstanceController');
const genre_controller=require('../controllers/genreController');

const router=express.Router();


// Route for bookController

// get request sending to index page
router.get('/',book_controller.index);
// get request to creating book
router.get('/book/create',book_controller.book_create_get);
// post request to creating book
router.post('/book/create',book_controller.book_create_post);
// get request to deleting book
router.get('/book/:id/delete',book_controller.book_delete_get);
// post request to deleting book
router.post('/book/:id/delete',book_controller.book_delete_post);
// get request to updating book
router.get('/book/:id/update',book_controller.book_update_get);
// post request to updating book
router.post('/book/:id/update',book_controller.book_update_post);
// get request for one book
router.get('/book/:id',book_controller.book_detail);
// get request for list of book
router.get('/books',book_controller.book_list);

/// Routes to author controller///

// get request for creating author
router.get('/author/create',author_controller.author_create_get);
// post request for creating author
router.post('/author/create',author_controller.author_create_post);
// get request to deleting author
router.get('/author/:id/delete',author_controller.author_delete_get);
// post request to deleting author
router.post('/author/:id/delete',author_controller.author_delete_post);
// get request to updating author
router.get('/author/:id/update',author_controller.author_update_get);
// post request to updating author
router.post('/author/:id/update',author_controller.author_update_post);
// get request for one author
router.get('/author/:id',author_controller.author_detail);
// get request for list of author
router.get('/authors',author_controller.author_list);


/// Routes to genre controller///

// get request for creating genre
router.get('/genre/create',genre_controller.genre_create_get);
// post request for creating genre
router.post('/genre/create',genre_controller.genre_create_post);
// get request to deleting genre
router.get('/genre/:id/delete',genre_controller.genre_delete_get);
// post request to deleting genre
router.post('/genre/:id/delete',genre_controller.genre_delete_post);
// get request to updating genre
router.get('/genre/:id/update',genre_controller.genre_update_get);
// post request to updating genre
router.post('/genre/:id/update',genre_controller.genre_update_post);
// get request for one genre
router.get('/genre/:id',genre_controller.genre_detail);
// get request for list of genre
router.get('/genres',genre_controller.genre_list);

/// Routes to bookinstance controller///

// get request for creating bookinstance
router.get('/bookinstance/create',bookinstance_controller.bookinstance_create_get);
// post request for creating bookinstance
router.post('/bookinstance/create',bookinstance_controller.bookinstance_create_post);
// get request to deleting bookinstance
router.get('/bookinstance/:id/delete',bookinstance_controller.bookinstance_delete_get);
// post request to deleting bookinstance
router.post('/bookinstance/:id/delete',bookinstance_controller.bookinstance_delete_post);
// get request to updating bookinstance
router.get('/bookinstance/:id/update',bookinstance_controller.bookinstance_update_get);
// post request to updating bookinstance
router.post('/bookinstance/:id/update',bookinstance_controller.bookinstance_update_post);
// get request for one bookinstance
router.get('/bookinstance/:id',bookinstance_controller.bookinstance_detail);
// get request for list of bookinstance
router.get('/bookinstances',bookinstance_controller.bookinstance_list);

module.exports=router;
