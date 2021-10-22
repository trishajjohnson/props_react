function App() {
    return (
      <div>
        <Person name="Trisha" age={35} hobbies={["playing guitar", "yoga", "coding"]} />
        <Person name="Harlow" age={6} hobbies={["painting", "riding bicycle", "ballet"]}/>
        <Person name="Callioppee" age={32} hobbies={["setting bones", "dancing in her underwear", "traveling"]}/>
      </div>
    );
  }


ReactDOM.render(<App />, 
    document.getElementById("root"));