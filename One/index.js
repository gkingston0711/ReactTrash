


//ReactDOM.render(<h1>inside index_js</h1>,document.getElementById("root"))

//ReactDOM.render(<p>sample text can be long or short.. doesnt matter</p>, document.getElementById("root"))
// what i want on the screen, where I want it.

function NavBar(){
    return(
           <p>hmmmmm</p>
    )
}

function MainContent(){
    return(
        <h1>nothing is showing up...</h1>
    )
}

/*const page = (
    <div>
        <h1>this is the h1 element</h1>
        <p>this is the paragraph</p>
    </div>
)*/

const myNavBar = (
    <nav>
        <h1>brand name</h1>
        <ul>
            <li>pricing</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </nav>
)


ReactDOM.render(
myNavBar
, document.getElementById("root"))