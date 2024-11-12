import React from 'react'

export default async function CategoryList() {

    const res= await fetch("http://localhost:5000/api/category/list");
    const {data	} = await res.json();
     console.log(data);

  return (
    <div>CategoryList</div>
  )
}
