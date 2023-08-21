
import PaginationComponent from '@/components/paginationComponent'
import SearchInputComponent from '@/components/searchInputComponent'
import DropdownComponent from '@/components/selectComponent'
import ProductComponent from '@/components/tableComponent'
import { GetServerSideProps, Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HOME | ADAA NextJS Test App',
  description: 'Make by NK$_R@0ul',
}

async function fetchDatas() {
  let a = await fetch("https://dummyjson.com/products?limit=10&skip=5").then(res => res.json())

  return a;
}


export default async function Home() {
  const datas = await fetchDatas();



  return (
    <main className="flex min-h-screen flex-col items-center justify-start border-black">
      <div className="container flex flex-col items-center border-black my-4">
        {/*  */}
        <div className="flex items-center justify-between w-3/4">
          <div className='border-black w-80'>
            <DropdownComponent />
          </div>
          <div className='border-black w-80'>
            <SearchInputComponent />
          </div>
        </div>
        {/*  */}
        <div className='my-8 w-3/4 border-2 border-black'>
          <ProductComponent products={datas.products} />
        </div>
        {/*  */}
        <div className='w-3/4'>
          <div className='flex'>
            <PaginationComponent />
          </div>
        </div>
      </div>
    </main>
  )
}
