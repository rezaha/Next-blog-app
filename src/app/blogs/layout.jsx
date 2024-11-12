
export default function Layout({children}) {
  return (
  <div className="grid grid-cols-12 h-screen">
    {/* منوی سمت راست */}
    <div className="col-span-2 bg-gray-800 text-white p-4">
      <p>منوی سمت راست</p>
    </div>
    {/* بخش محتوای سمت چپ */}
    <div className="col-span-8 bg-gray-100 p-6">
      {children}
    </div>
  </div>
  )
}
