'use client';

import { Dropdown, Label, Select } from 'flowbite-react';
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';

export default function DropdownComponent() {
    return (
        <div
            className="max-w-lg"
            id="select"
        >
            <div className="mb-2 block">
                <Label
                    htmlFor="nomberOfElement"
                    value="Select the number of element"
                />
            </div>
            <Select
                id="nomberOfElement"
                required
            >
                <option>
                    5
                </option>
                <option>
                    10
                </option>
                <option>
                    15
                </option>
                <option>
                    20
                </option>
            </Select>
        </div>
    )
}


