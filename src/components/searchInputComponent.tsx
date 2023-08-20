'use client';

import { Label, TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';

export default function SearchInputComponent() {
    return (
        <div className="max-w-md">
            <div className="mb-2 block">
                <Label
                    htmlFor="email4"
                    value="Tape to search ... "
                />
            </div>
            <TextInput
                id="email4"
                placeholder="Search"
                required
                rightIcon={HiSearch}
                type="search"
            />
        </div>
    )
}


