const router = require("express").Router();
const bookModel = require("../models/bookModels");

// POST request to add a book
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook.save();
    res.status(200).json({ message: "Book added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add book", error: err });
  }
});

//get request
router.get("/fetch", async (req, res) => {
  try {
    books = await bookModel.find();
    res.status(200).json({ books });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//get request by id
router.get("/fetch/:id", async (req, res) => {
  const id = req.params.id;
  try {
    book = await bookModel.findById(id);
    res.status(200).json({ book });
  } catch (err) {
    console.log(err);
  }
});

//update request by id
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, description, author, image, price } = req.body;
  try {
    book = await bookModel.findByIdAndUpdate(id, {
      bookname,
      description,
      author,
      image,
      price,
    });
    await book
      .save()
      .then(() => res.status(200).json({ message: "updated", book }));
  } catch (err) {
    console.log(err);
  }
});

//delete book by id

router.delete('/delete/:id', async (req,res)=>{
    const id = req.params.id;
    try{
        await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message : 'book deleted'}))
    }catch(err){
        console.log(err)
    }
})

module.exports = router;
