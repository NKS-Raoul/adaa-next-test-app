'use client';

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';

export default function PaginationComponent() {
    return (
        <>
            <Button
                className="mr-4"
                outline>
                <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
                <p>
                    précédent
                </p>
            </Button>
            <Button
                className="ml-4"
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