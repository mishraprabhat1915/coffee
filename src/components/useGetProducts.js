import React, { useState, useEffect } from 'react'
import { db } from "../firebase"
import { collection, getDocs } from 'firebase/firestore';
const useGetProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const productData = collection(db, "products")
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setLoading(true)
    try {
      const prodData = await getDocs(productData)
      setData(prodData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return [data, loading]
}

export default useGetProducts