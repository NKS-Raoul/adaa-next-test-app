'use client';

import { setEntities, setLoading } from '@/redux/productSlice';
import { Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

export default function SearchInputComponent() {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = async function () {
        dispatch(setLoading(true))
        if (search !== "") {
            await fetch(
                "https://dummyjson.com/products/search?q=" + search
            ).then(res => res.json()).then(res => {
                dispatch(setEntities(res.products))
            });
        }
        dispatch(setLoading(false))
    }


    return (
        <div className="max-w-md">
            <div className="mb-2 block">
                <Label
                    htmlFor="email4"
                    value="Tape to search ..."
                />
            </div>
            <div className="flex justify-between">
                <TextInput
                    id="email4"
                    placeholder="Search"
                    className='rounded-r-none'
                    style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    required
                    type="search"
                />
                <button type="button"
                    onClick={handleSearch}
                    className="flex text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg rounded-l-none text-sm px-5 py-2.5 mr-2 mb-2">
                    <HiSearch className="mr-2 h-5 w-5" />Search
                </button>
            </div>
        </div >
    )
}


