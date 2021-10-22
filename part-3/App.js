function App() {
    return (
      <div>
        <Person name="Trisha" age={35} hobbies={[{id: 1, hobby: "playing guitar"}, {id: 2, hobby: "yoga"}, {id: 3, hobby: "coding"}]} />
        <Person name="Harlow" age={6} hobbies={[{id: 1, hobby: "painting"}, {id: 2, hobby: "riding bicycle"}, {id: 3, hobby: "ballet"}]}/>
        <Person name="Callioppee" age={32} hobbies={[{id: 1, hobby: "setting bones"}, {id: 2, hobby: "dancing in her underwear"}, {id: 3, hobby: "traveling"}]}/>
      </div>
    );
  }


ReactDOM.render(<App />, 
    document.getElementById("root"));