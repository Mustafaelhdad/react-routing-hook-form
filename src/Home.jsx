import React, { useState } from "react";

export default function Home() {
  const [data, setData] = useState([
    { name: "sayed", email: "ee.23@gdfg.cdf" },
    { name: "hatem", email: "fdf@gdfg.cdf" },
    { name: "ahmed", email: "ijefij@gdfg.cdf" },
  ]);
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {data.map((x) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
