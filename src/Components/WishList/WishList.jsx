import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import Button from "../Button/Button";
import imgProduct from "../../Assets/imgProduct.jpg";
import { serverNetwork } from "../../Services/utils/value";

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
    title: "",
    dataIndex: "btn",
  },
];

const WishList = (props) => {
  const favorites = props.favorites;
  const data: DataType[] = [];
  favorites.map((item) => {
    data.push({
      key: item.id_favorite,
      image: (
        <img src={`${serverNetwork}/${item.productImage}`} width="70" alt="" />
      ),
      name: `${item.productName}`,
      price: `$${
        item.productPrice - item.productPrice * (item.discount / 100)
      }`,
      date: "21-07-2019",
      btn: <Button label="Add to cart" />,
    });
  });
  return (
    <div>
      <div className="">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default WishList;
