'use client'
import { Avatar, Table } from "flowbite-react"
import Image from "next/image";
import { HiStar } from 'react-icons/hi';

export default function ProductComponent(props: any) {
    return <>
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
                {props.products?.map((ele: any) => (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={ele.id}>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {ele.id}
                        </Table.Cell>
                        <Table.Cell className="flex items-center justify-center">
                            <Avatar alt={ele.title} img={ele.image} className="border-2 border-black h-10 w-10" />
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
        </Table>
    </>
}