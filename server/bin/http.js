const app = require ("../app")
const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log("app running in port", port)
})
