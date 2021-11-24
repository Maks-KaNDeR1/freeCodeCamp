// 1
const JSX = <h1>Hello JSX!</h1>;

// 2 
const JSX = <div>
    <h1>Heading.</h1>
    <p>Paragraph</p>
    <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul>
</div>;

// 3
const JSX = (
    <div>
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
        {/* */}
    </div>
);
// 4
const JSX = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));

// 5
const JSX = (
    <div className='myDiv'>
        <h1>Add a class to this div</h1>
    </div>
);
