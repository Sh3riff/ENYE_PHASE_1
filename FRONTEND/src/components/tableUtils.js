import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useAsyncDebounce } from 'react-table';
import { SearchBar, ToggleButton, ColumnControl, Toggler } from '../styles';

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce( value => {
        setFilter(value || undefined)
    }, 1000)
    return (
        <SearchBar>
            <input value={value || ""}
            placeholder="Search..."
            onChange={ e => {
                setValue(e.target.value)
                onChange(e.target.value)
            }} />            
        </SearchBar>
    )
}

export const ColumnFilter = ({ column }) => {

    const { filterValue, setFilter } = column
    return (
        <span>
            <input value={filterValue  || ""}
            placeholder={`filter by ${column.Header}`}
            onChange={ e => setFilter(e.target.value) } />            
        </span>
    )
}

export const Checkbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

export const HideColumns = ({ allColumns, getToggleHideAllColumnsProps}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <ToggleButton onClick={ () =>setIsOpen(!isOpen)}>Show/Hide Column</ToggleButton>
            {
                isOpen &&
                <ColumnControl>
                    <Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
                    {
                        allColumns.map(column => (
                            <div key={nanoid()}>
                                <label>
                                    <input type='checkbox' {...column.getToggleHiddenProps()}/>
                                    {column.Header}
                                </label>
                            </div>
                        ))
                    }
                </ColumnControl>
            }
        </div>
    )
}

export const COLUMNS = [
    {
        Header: 'FirstName',
        accessor: 'FirstName'
    },
    {
        Header: 'LastName',
        accessor: 'LastName'
    },
    {
        Header: 'Gender',
        accessor: 'Gender'
    },
    {
        Header: 'Latitude',
        accessor: 'Latitude'
    },
    {
        Header: 'Longitude',
        accessor: 'Longitude'
    },
    {
        Header: 'CreditCardNumber',
        accessor: 'CreditCardNumber'
    },
    {
        Header: 'CreditCardType',
        accessor: 'CreditCardType'
    },
    {
        Header: 'Email',
        accessor: 'Email'
    },
    {
        Header: 'DomainName',
        accessor: 'DomainName'
    },
    {
        Header: 'PhoneNumber',
        accessor: 'PhoneNumber'
    },
    {
        Header: 'MacAddress',
        accessor: 'MacAddress'
    },
    {
        Header: 'URL',
        accessor: 'URL'
    },
    {
        Header: 'UserName',
        accessor: 'UserName'
    },
    {
        Header: 'LastLogin',
        accessor: 'LastLogin'
    },
    {
        Header: 'PaymentMethod',
        accessor: 'PaymentMethod'
    },
]