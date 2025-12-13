const Home = () =>{
    const h1Style={
        backgroundColor:"pink",
        color:"blue"
    }
    return(
        <div>
            <h1>Home</h1>
            <p>Welcome to home page</p>
        </div>
        
        // <div className="home">
        //     <h1>Home</h1>
        //     <h1 style={h1Style}>Welcome to JSX</h1>
        //     <h2>This is a simple React Component</h2>
        //     <img src="vite.svg" alt="" style={{marginLeft:"100px",width:"500px",height:"500px"}}/>
        // </div>
    )
}
export default Home;