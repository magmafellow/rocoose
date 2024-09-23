export default function DefaultGrid({children}: { children: any }) {
  return (
    <div className='min-h-screen xl:grid xl:grid-cols-[500px_640px]'>
      {children}
    </div>
  )
}
