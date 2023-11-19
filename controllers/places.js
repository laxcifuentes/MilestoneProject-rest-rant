const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'In-N-Out',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'American, Burgers',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', {places})
})



module.exports = router