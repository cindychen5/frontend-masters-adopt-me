const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

const App = () => {
    return React.createElement("div", {id: "something-important"},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Bobo",
                animal: "Dog",
                breed: "Pug"
            }),
            React.createElement(Pet, {
                name: "Dingo",
                animal: "Cat",
                breed: "Black cat"
            }),
            React.createElement(Pet, {
                name: "NeeNee",
                animal: "Cat",
                breed: "Long white hair cat"
            }),
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);