import { useState, useEffect } from "react";
import { URL } from "../hooks/Constants";
import axios from "axios";
import swal from "sweetalert";

export const useRequestData = (url, initialState) => {
  const [ data, setData ] = useState(initialState)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    getData()

  }, [url])

  const getData = () => {
    setIsLoading(true)
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }

    axios
      .get(`${URL}${url}`, headers)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        swal.fire("Deu erro!")
      })
  }

  return [data, getData, isLoading]
  
}

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFTb3dUMnZ5NWExQkVpR2N4eklSIiwiZW1haWwiOiJnYWJpcGVyb25AZ21haWwuY29tLmJyIiwiaWF0IjoxNjU2MTIxODc2fQ.EAl4ZfsU8R6-mQl03V3bICRNw4BD7_vyN05zLweWYFw

*/