import axios from "axios";
import { GetStaticProps } from "next";
import React, { createContext, useEffect, useState, useContext } from "react";
import { StateContext } from "../StateContext/StateContext";

export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  const [counterPosts, setCounterPosts] = useState([]);
  const [userCounter, setUserCounter] = useState([]);
  const { filterModal, openModalValue }: any = useContext(StateContext);
  const [filterPost, setFilterPost] = useState([]);
  const [loader, setLoading] = useState(false)

  const handleFilterUniversity = () => {
    setLoading(true)
    fetch(`https://zsqur.to-leet.com/api/v1/product`)
      .then((res) => res.json())
      .then((data) => {
        const result = data?.filter(
          (post: any) => openModalValue?.eng === post?.university?.eng);
     
        setLoading(false)
        setFilterPost(result);
      });
  };

  useEffect(() => {
    fetch("https://zsqur.to-leet.com/api/v1/product")
      .then((res) => res.json())
      .then((data) => setCounterPosts(data));
  }, []);

  useEffect(() => {
    fetch("https://zsqur.to-leet.com/api/v1/users/signup")
      .then((res) => res.json())
      .then((data) => setUserCounter(data?.data));
  }, []);
  // const handleFilter = () => {
  //   counterPosts.filter((lc) => lc === filterModal);
  // };
  const [counter, setCounter] = useState([])
  useEffect(()=>{
   fetch('https://zsqur.to-leet.com/api/v1/product/category/type')
   .then(res=>res.json())
   .then(data=> setCounter(data?.countProduct))
  },[])


  const info = {
    counterPosts,
    userCounter,
    counter,
    handleFilterUniversity,
    filterPost,
    setFilterPost,
    loader
  };
  return <APIContext.Provider value={info}>{children}</APIContext.Provider>;
};

export default ApiContext;
