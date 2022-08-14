import { useState } from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { add } from "./bookSlice";

const label = { inputProps: { "aria-label": "Switch demo" } };

export function AddBook() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    year: 0,
    id: "",
    status: false,
  });

  const { title, author, description, year, id, status } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box className="r"
      component="form"
      sx={{
        "& > :not(style)": {  width: "50ch", marginLeft: '10px' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">Добавление книги</FormLabel>
        <FormGroup  aria-label="position" >
          <TextField
            value={title}
            name="title"
            onChange={onChange}
            id="standard-basic"
            label="Название"
            variant="standard"
          />
          <TextField
            value={author}
            name="author"
            onChange={onChange}
            id="standard-basic"
            label="Автор"
            variant="standard"
          />
          <TextField
            value={description}
            name="description"
            onChange={onChange}
            id="standard-basic"
            label="Краткое описание"
            variant="standard"
          />
          <TextField
            value={year}
            name="year"
            onChange={onChange}
            id="standard-basic"
            label="Год"
            variant="standard"
          />
          <TextField
            value={id}
            name="id"
            onChange={onChange}
            id="standard-basic"
            label="ID"
            variant="standard"
          />
          <div row center>
          <FormControlLabel
            value="end"
            control={
              <Switch
                value={status}
                color="primary"
                name="status"
                onChange={onChange}
              />
            }
            label="Выдана"
            labelPlacement="end"
          />
          <Button variant="contained" onClick={() => dispatch(add(formData))}>
            Добавить
          </Button>
          </div>
        </FormGroup>
      </FormControl>
    </Box>
  );
}
