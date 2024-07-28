import express from "express"

const app = express()
const port = 3000
let blogPosts = {}

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("list.ejs", { posts: blogPosts })
})

app.get("/create", (req, res) => {
    res.render("create.ejs")
})
app.post("/create", (req, res) => {
    res.render("list.ejs", { posts: blogPosts })
})

app.get("/view", (req, res) => {
    res.render("view.ejs")
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})