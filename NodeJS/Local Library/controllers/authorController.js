const { nextTick } = require("async");
const Author=require("../models/author");
const Book=require("../models/book");
const {body,validationResult}=require("express-validator");
const asyncHandler=require("express-async-handler");


exports.author_list=asyncHandler(async (req,res)=>{
    const allAuthors=await Author.find({}).sort({family_name:1}).exec();
    res.render("author_list",{
        title:"Author list",
        author_list:allAuthors
    });
});

exports.author_detail=asyncHandler(async (req,res,next)=>{
    const [author,allBooksByAuthor]=await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({author:req.params.id},"title summary").exec()
    ]);
    if (author==null){
        const err = new Error("Author not found!");
        err.status=404;
        next(err);
    }
    res.render("author_detail",{
        title:"Author Detail",
        author,
        author_books:allBooksByAuthor
    });
});

// create for get request
exports.author_create_get=asyncHandler(async (req,res)=>{
    res.render("author_form",{title:"Create Author: "});
});
// create for post request
exports.author_create_post=[
    body("first_name")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name contains alphanumeric characters"),
    body("family_name")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name contains alphanumeric characters"),
    body("date_of_birth","Invalid date of birth")
    .optional({values:"falsy"})
    .isISO8601()
    .toDate(),
    body("date_of_death","Invalid date of death")
    .optional({values:"falsy"})
    .isISO8601()
    .toDate(),
    asyncHandler(async (req,res,next)=>{
        const errors=validationResult(req);
        const author=new Author({
            first_name:req.body.first_name,
            family_name:req.body.family_name,
            date_of_birth:req.body.date_of_birth,
            date_of_death:req.body.date_of_death
        });
        if (!errors.isEmpty()){
            res.render("author_form",{
                title:"Create Author",
                author,
                errors:errors.array()
            });
            return ;
        }
        await author.save();
        res.redirect(author.url);
    })
];

// update for get request
exports.author_update_get=asyncHandler(async (req,res)=>{
    res.send("Not implemented");
});

// update for post request
exports.author_update_post=asyncHandler(async (req,res)=>{
    res.send("Not implemented");
});

// delete for get request
exports.author_delete_get=asyncHandler(async (req,res)=>{
    const [author,allBooksByAuthor]=await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({auhor:req.params.id}).exec()
    ]);
    if (author===null){
        res.redirect('/catalog/authors');
    }
    res.render("author_delete",{
        title:"Delete Author: ",
        author,
        author_books:allBooksByAuthor
    });
});

// delete for post request
exports.author_delete_post=asyncHandler(async (req,res)=>{
    const [author,allBooksByAuthor]=await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({author:req.params.id},"title summary").exec()
    ]);
    if (allBooksByAuthor.length){
        res.render("author_delete",{
            title:"Delete Author: ",
            author,
            author_books:allBooksByAuthor
        });
        return ;
    }
    await Author.findByIdAndDelete(req.body.authorid);
    res.redirect("/catalog/authors");
});
