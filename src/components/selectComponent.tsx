'use client';
import { setLimit, setEntities, setLoading } from '@/redux/productSlice';
import { Label, Select } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';

export default function SelectComponent() {

    const { limit, skip } = useSelector((state: any) => state.product);
    const dispatch = useDispatch();

    const handleLimitInStore = async function (e: any) {
        dispatch(setLimit(parseInt(e.target.value)))
        dispatch(setLoading(true))
        const response = await fetch(
            "https://dummyjson.com/products?limit=" + e.target.value + "&skip=" + (skip * parseInt(e.target.value))
        ).then(res => res.json()).then(res => {
            dispatch(setEntities(res.products))
        });
        dispatch(setLoading(false))
    }




    return (
        <div
            className="max-w-lg"
            id="select"
        >
            <div className="mb-2 block">
                <Label
                    htmlFor="nomberOfElement"
                    value="Select the number of element "
                />
            </div>
            <Select
                id="nomberOfElement"
                required
                onChange={handleLimitInStore}
            >
                <option value={5}>
                    5
                </option>
                <option value={10}>
                    10
                </option>
                <option value={15}>
                    15
                </option>
                <option value={20}>
                    20
                </option>
            </Select>
        </div>
    )
}


