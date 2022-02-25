const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const cardRoutes = require('./routes/card');
const aboutRoutes = require('./routes/about');
const actionsRoutes = require('./routes/actions');
const catalogRoutes = require('./routes/catalog');
const deliveryRoutes = require('./routes/delivery');
const contactsRoutes = require('./routes/contacts');
const addRoutes = require('./routes/add');
const Product = require('./models/product');

//const productRoutes = require('./routes/products');

const app = express();




app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/actions', actionsRoutes);
app.use('/catalog', catalogRoutes);
app.use('/delivery', deliveryRoutes);
app.use('/contacts', contactsRoutes);
app.use('/add', addRoutes);
app.use('/card', cardRoutes);
//app.use('/products', productRoutes);

app.get('/:id', async (req, res) => {
    const product = await Product.getById(req.params.id);

    res.render('product', {
        title: `${product.title}`,
        product
    });
}); 

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});