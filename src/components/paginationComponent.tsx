'use client';

import { setEntities, setLimit, setLoading, setSkip } from '@/redux/productSlice';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

export default function PaginationComponent() {

    const { limit, skip } = useSelector((state: any) => state.product);
    const dispatch = useDispatch();

    console.log(limit, " ============ limit")

    const previous = async function () {
        dispatch(setSkip(skip - 1))
        dispatch(setLoading(true))
        const response = await fetch(
            "https://dummyjson.com/products?limit=" + limit + "&skip=" + ((skip - 1) * limit)
        ).then(res => res.json()).then(res => {
            dispatch(setEntities(res.products))
        });
        dispatch(setLoading(false))
    }

    const next = async function () {
        dispatch(setSkip(skip + 1))
        dispatch(setLoading(true))
        const response = await fetch(
            "https://dummyjson.com/products?limit=" + limit + "&skip=" + ((skip + 1) * limit)
        ).then(res => res.json()).then(res => {
            dispatch(setEntities(res.products))
        });
        dispatch(setLoading(false))
    }


    return (
        <>
            {skip !== 0 && <Button
                className="mr-4"
                onClick={previous}
                outline>
                <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
                <p>
                    précédent
                </p>
            </Button>}
            <Button
                className="ml-4"
                onClick={next}
                outline
            >
                <p>
                    Suivant
                </p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </>
    )
}