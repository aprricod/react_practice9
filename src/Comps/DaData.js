import React, { useState } from "react";
import { FioSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

export default function DaData() {
  const [value, setValue] = useState();
  
  return (
    <div>
      <FioSuggestions
        token="47be26f470aa33563ac04f42403500f02deb3652"
        value={value}
        onChange={(e) => {
          setValue(e);
          console.log(e);
          console.log(e.data.surname);
          console.log(e.data.name);
          console.log(e.data.patronymic);
          console.log(e.value);
        }}
      />
    </div>
  );
}
