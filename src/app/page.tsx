
import PaginationComponent from '@/components/paginationComponent'
import SearchInputComponent from '@/components/searchInputComponent'
import SelectComponent from '@/components/selectComponent'
import ProductComponent from '@/components/tableComponent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HOME | ADAA NextJS Test App',
  description: 'Make by NK$_R@0ul',
}


export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <div className="container flex flex-col items-center  my-4">
        <div className="flex items-center justify-between w-3/4">
          <div className=' w-80'>
            <SelectComponent />
          </div>
          <div className=' w-80'>
            <SearchInputComponent />
          </div>
        </div>
        <div className='my-8 w-3/4'>
          <ProductComponent />
        </div>
        <div className='w-3/4'>
          <div className='flex'>
            <PaginationComponent />
          </div>
        </div>
      </div>
    </main>
  )
}
