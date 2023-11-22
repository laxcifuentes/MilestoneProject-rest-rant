const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/iron-man.jpg" alt="Iron Man Extending His Arm Out In A Stopping Position" />
                    <div>
                        Photo by <a href="https://unsplash.com/@igorbumba">Igor Bumba</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-hand-with-a-light-on-it-rkaahInFlBg">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404