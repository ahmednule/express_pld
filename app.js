const express = require('express');


const app = express();
app.set('view engine', 'ejs');

app.listen(4000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Working with html pages', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dignissimos consequuntur'},
        {title: 'Working with javascript files', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dignissimos consequuntur'},
        {title: 'Working with Django Files', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dignissimos consequuntur'},


    ];
    
    // res.sendFile('/views/index.html', {root: __dirname});
    res.render('index', { blogs });
}
);

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about');
}
);

app.get('/blog/create', (req, res) => {
    const blogs = [
        {title: 'Working with html pages', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dignissimos consequuntur'},
        {title: 'Working with javascript files', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dignissimos consequuntur'},
        {title: 'Working with Django Files', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dignissimos consequuntur'},


    ];
    // res.sendFile('./views/create.html', {root: __dirname});
    res.render('create', {blogs});
}
);