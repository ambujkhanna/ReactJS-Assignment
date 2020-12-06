const UserInput = (params) => {
  const inputStyle = {
    border: "1px solid #fff",
    padding: "10px",
  };
  return (
    <fieldset>
      <legend>UserInput</legend>
      <input
        onChange={params.changed}
        value={params.name}
        className="input"
        style={inputStyle}
      ></input>
    </fieldset>
  );
};

export default UserInput;
