import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  let { register, handleSubmit } = useForm();

  const [data, setData] = useState([
    { name: "sayed", email: "ee.23@gdfg.cdf" },
    { name: "hatem", email: "fdf@gdfg.cdf" },
    { name: "ahmed", email: "ijefij@gdfg.cdf" },
  ]);

  function save(res) {
    console.log(res);
    setData((current) => [...current, { name: res.name, email: res.email }]);
  }

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {data.map((x) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.email}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </table>

      <form onSubmit={handleSubmit(save)}>
        <input type="text" {...register("name")} />
        <input type="text" {...register("email")} />
        <input type="submit" />
      </form>
    </>
  );
}
