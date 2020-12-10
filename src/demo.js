/**
 * Emily Wesel
 * WindBorne Coding Challenge
 * Front-end Version
 */

import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
/**
 *
 * Here, I'm using the libraries from the provided website.
 * I also implemented a dropdown menu from scratch, but
 * I found that the best way to match the features on the provided
 * website was to use the provided libraries.
 */

export default function ControllableStates(props) {
  /*
  Here I'm using props so that we can specify the list of options 
  and the default value from the index.js file. I interpreted this method 
  as the "normal" use of props because this seems to work and this is how I 
  used props in my other web development project. This is also the way 
  props is explained in the W3 schools tutorial.
  */
  const options = props.optionsList;
  const [value, setValue] = React.useState(props.defaultValue);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        /** Here is the onChange function. When we receive a change,
        we forward the newValue along to the setValue function
        The value variable only changes when the user provides a 
        valid state to use. 
        */
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        /** Here we change the inputValue, which the user types in.
         * If the uer types in an invalid input, we do not change
         * the real value. However, we do update the inputValue
         * to accuractely reflect what the user has given us.
         */
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Controllable" variant="outlined" />
        )}
      />
    </div>
  );
}
