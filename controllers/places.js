const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'In-N-Out',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'American, Burgers',
        pic: '/images/in-n-out.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding-cat-cafe.jpg'
      }]
      
    res.render('places/index', {places})
})

module.exports = router