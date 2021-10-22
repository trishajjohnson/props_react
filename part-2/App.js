function App() {
    return (
      <div>
        <Tweet username="TrishtheDish" name="Trish" datePosted="09/21/21" message="This is my first tweet." />
        <Tweet username="TrishtheDish" name="Trish" datePosted="10/13/21" message="Happy Birthday, Harlow!" />
        <Tweet username="TrishtheDish" name="Trish" datePosted="12/25/21" message="Merry Christmas." />
       
      </div>
    );
  }


ReactDOM.render(<App />, 
    document.getElementById("root"));