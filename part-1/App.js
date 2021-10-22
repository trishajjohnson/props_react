function App() {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Trisha" />
      </div>
    );
  }


ReactDOM.render(<App />, 
    document.getElementById("root"));