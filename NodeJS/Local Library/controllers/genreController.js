const Genre = require("../models/genre");
const Book=require('../models/book')
const {body,validationResult}=require("express-validator")
const asyncHandler = require("express-async-handler");

exports.genre_list = asyncHandler(async (req, res, next) => {
    const allGenres= await Genre.find().sort().exec();
    res.render('genre_list',{
        title:"Genre List",
        genre_list:allGenres
    });
});

exports.genre_detail = asyncHandler(async (req, res, next) => {
    const [genre,booksInGenre] = await Promise.all([
        Genre.findById(req.params.id),
        Book.find({genre:req.params.id},"title summary").exec()
    ]);
    if (genre=== null){
        const err=new Error("Genre not found!");
        err.status=404;
        next(err);
    }
    res.render("genre_detail",{
        title:"Genre Details",
        genre,
        genre_books:booksInGenre
    });
});

exports.genre_create_get = asyncHandler(async (req, res, next) => {
    res.render("genre_form",{title:"Create Genre: "});
});

exports.genre_create_post = [
    body("name","Genre name must contain at least 3 letters")
    .trim()
    .isLength({min:3})
    .escape(),

    asyncHandler(async (req,res,next)=>{
        const err = validationResult(req);
        const genre = new Genre({name:req.body.name});
        if (!err.isEmpty()){
            res.render("genre_form",{
                title:"Create genre",
                genre,
                errors:err.array()
            });
            return ;
        }
        const genreExists= await Genre.findOne({name:req.body.name})
        .collation({locale:"en",strength:2})
        .exec()
        if (genreExists){
            res.redirect(genre.url);
        }else{
            await genre.save;
            res.redirect(genre.url);
        }
    })
]

exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
});

exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
});

exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
});

exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
});
