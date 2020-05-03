import React, { useEffect, useState } from "react";
import ResumeListContext from "./ResumeListContext";
import ResumeList from "./ResumeList";
import ResumeFilter from "./ResumeFilter";
import ResumeSort from "./ResumeSort";
import ResumeSearch from "./ResumeSearch";
import axios from "axios";

import { PRIORITY_HIGH, PRIORITY_MIDDLE, PRIORITY_LOW } from "./constants";
import SearchBar from "../../react-patterns/layout-component/SearchBar";
import ResumeReset from "./ResumeReset";

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const ResumeListContainer = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortBy, setSortBy] = useState("priority");
  const [sortDirection, setSortDirection] = useState("desc");
  const [filterByTitle, setFilterByTitle] = useState("");
  const [filterByPriority, setFilterByPriority] = useState([1, 1, 1]);

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

  const handleFilter = ({ priorities }) => {
    setFilterByPriority(priorities);

    const tmp = !filterByTitle ? [...data] : [...filteredData];
    setFilteredData([...tmp.filter((item) => priorities[item.priority])]);
  };

  const handleSort = ({ prop, dir } = { prop: "priority", dir: "desc" }) => {
    setSortBy(prop);
    setSortDirection(dir);

    sort();
  };

  const handleSearch = (query) => {
    setFilterByTitle(query);

    search();
  };

  const handleReset = () => {
    setFilteredData(data);
    setFilterByTitle("");
    setSortBy("priority");
    setSortDirection("desc");
    setFilterByPriority([1, 1, 1]);
  };

  const search = () => {
    const query = filterByTitle;
    if (query) {
      setFilteredData([
        ...filteredData.filter((item) => item.title.match(`${query}`)),
      ]);
    } else {
      setFilteredData(data);
    }
  };

  const sort = () => {
    const prop = sortBy;
    const dir = sortDirection;

    if (dir === "desc") {
      setFilteredData([...filteredData].sort((a, b) => a[prop] - b[prop]));
    }
    if (dir === "asc") {
      setFilteredData([...filteredData].sort((a, b) => b[prop] - a[prop]));
    }
  };

  return (
    <ResumeListContext.Provider
      value={{
        data: filteredData,
        sortBy,
        sortDirection,
        filterPriorities: filterByPriority,
        search: filterByTitle,
      }}
    >
      <div className="row">
        <ResumeSearch onSearch={handleSearch} />
        <ResumeFilter onFilter={handleFilter} />
        <ResumeReset onReset={handleReset} />
        <ResumeSort onSort={handleSort} />
      </div>
      <ResumeList onDelete={handleDelete} onEdit={handleEdit} />
    </ResumeListContext.Provider>
  );
};

export default ResumeListContainer;
