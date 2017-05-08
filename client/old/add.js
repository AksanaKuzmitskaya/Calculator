
add() {
    const url = 'http://localhost:3000/api/calculator/add';
    const {xVal, yVal} = this.state;
    var myHeaders = new Headers({
        'Content-Type': 'application/json'
    }); 
    var data = { 
        x: xVal, 
        y: yVal 
    };
    fetch(url,{
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then((res) => res.json()
    .then((res) => { this.setState({result: res.result}); })
    );
}


<button onClick={this.add.bind(this)}>add</button>