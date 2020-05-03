import React, { useEffect, useState } from "react";
import ResumeListContext from "./ResumeListContext";
import ResumeList from "./ResumeList";
import ResumeFilter from "./ResumeFilter";
import ResumeSort from "./ResumeSort";
import axios from "axios";

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const ResumeListContainer = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortBy, setSortBy] = useState("priority");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const fetchedData = data.map((item) => {
        return { ...item, priority: getRandomInt(3), editable: false };
      });
      setData(fetchedData);
      setFilteredData(fetchedData);
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    try {
      const remove = async () => {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      };
      remove();

      setData(data.filter((item) => item.id != id));
      setFilteredData(filteredData.filter((item) => item.id != id));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleEdit = ({ id, ...rest }) => {
    try {
      const result = async () => {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          ...rest,
        });
      };
      result();

      setFilteredData(
        filteredData.map((item) => {
          if (item.id === id) {
            for (let prop in rest) {
              item[prop] = rest[prop];
            }
          }
          return item;
        })
      );
    } catch (e) {
      console.warn(e);
    }
  };

  const handleFilter = (title) => {
    if (title) {
      setFilteredData(data.filter((item) => item.title.match(`${title}`)));
    } else {
      setFilteredData(data);
    }
  };

  const handleSort = ({ prop, dir } = { prop: "priority", dir: "desc" }) => {
    if (dir === "desc") {
      setFilteredData([...filteredData].sort((a, b) => a[prop] - b[prop]));
    }
    if (dir === "asc") {
      setFilteredData([...filteredData].sort((a, b) => b[prop] - a[prop]));
    }
  };

  return (
    <ResumeListContext.Provider
      value={{ data: filteredData, sortBy, sortDirection }}
    >
      <div className="row">
        <ResumeFilter onFilter={handleFilter} />
        <ResumeSort onSort={handleSort} />
      </div>
      <ResumeList onDelete={handleDelete} onEdit={handleEdit} />
    </ResumeListContext.Provider>
  );
};

export default ResumeListContainer;
