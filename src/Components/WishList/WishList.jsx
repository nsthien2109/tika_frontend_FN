import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import Button from "../Button/Button";
import imgProduct from "../../Assets/imgProduct.jpg";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Product Image",
    dataIndex: "image",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Stock",
    dataIndex: "stock",
  },
  {
    title: "",
    dataIndex: "btn",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    image: <img src={imgProduct} width="70" alt="" />,
    name: `Product King ${i}`,
    price: "$32.56",
    date: "21-07-2019",
    stock: "instock",
    btn: <Button label="Add to cart" />,
  });
}

const WishList = (props) => {
  return (
    <div>
      <div className="">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default WishList;
