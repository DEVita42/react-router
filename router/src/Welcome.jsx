import Age from "./Age";

const Welcome = ({name, age}) => {
  return (
    <div>
      <strong>Welcome, {name}!</strong>
      <Age age={age}/>
     
    </div>
  );
};

export default Welcome;
