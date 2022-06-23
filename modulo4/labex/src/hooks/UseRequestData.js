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