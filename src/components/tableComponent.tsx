'use client'
import { Product } from "@/types";
import { Avatar, Spinner, Table } from "flowbite-react"
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '@/redux/productSlice'
import { AppDispatch, RootState } from '@/redux/store'


export function ProductComponent() {

    const ref: any = useRef(false);
    const dispatch = useDispatch<AppDispatch>();
    const { entities, loading } = useSelector((state: RootState) => state.product)

    console.log("   sssssssssssssssssssss ================ ", entities)


    useEffect(() => {
        if (!ref.current) {
            dispatch(fetchProducts())
        }

        return () => {
            ref.current = true
        }
    }, []);



    return <>
        {loading ?
            <div className="flex items-center justify-center py-10">
                <Spinner aria-label="Default status" className="h-20 w-20" />
            </div>
            :
            <Table hoverable className="w-full">
                <Table.Head>
                    <Table.HeadCell>
                        ID
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Thumbnails
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Title
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Description
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Categorie
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Prix
                    </Table.HeadCell>
                    <Table.HeadCell>
                        La Marque
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {entities.map((ele: any) => (
                        <Table.Row className="" key={ele.id}>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {ele.id}
                            </Table.Cell>
                            <Table.Cell className="flex items-center justify-center">
                                <Avatar alt={ele.title} img={ele.thumbnail} className="h-10 w-10" />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {ele.title}
                            </Table.Cell>
                            <Table.Cell>
                                {ele.description}
                            </Table.Cell>
                            <Table.Cell>
                                {ele.category}
                            </Table.Cell>
                            <Table.Cell>
                                ${ele.price}
                            </Table.Cell>
                            <Table.Cell>
                                {ele.brand}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>}
    </>
}

export default ProductComponent;