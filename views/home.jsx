const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/fettucine-alfredo.jpg" alt="Fettucine Alfredo Pasta On Brown Wooden Table" />
                    <div>
                        Photo by: <a href="https://unsplash.com/@enginakyurt">Engin Akyurt</a> on <a href="https://unsplash.com/photos/a-plate-of-food-on-a-wooden-table-Jrvcg9My0B4">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                 <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home
