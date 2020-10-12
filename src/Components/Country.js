import React from "react";
import { Table, Flag } from "semantic-ui-react";


const flagRenderer = (item) => <Flag name={item.countryCode} />;
const countries = [{ name: "Ethiopia", countryCode: "et" }];

const Country = () => {
  return (
    <Table>
      <Table.Body>
        {countries.map((country) => (
          <Table.Row key={country.countryCode}>
            <Table.Cell>{flagRenderer(country)} ETH</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Country;
