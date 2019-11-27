import React, {useState, useEffect} from "react"
import {UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap"

function SelectField({items, allowEmpty, emptyOption, labelBy, valueBy, selectedItem, onSelect}) {
    const [_items, set_items] = useState(items)
    const [selected, setSelected] = useState(null)

    const getLabel = () => {
        if (selected) {
            const target = items.find(item => item.value === selected)
            return target.name
        } else {
            if (allowEmpty) {
                return emptyOption ? emptyOption : "Choose One"
            } else {
                return _items[0].name
            }
        }
    }

    useEffect(() => {
        standardizeItems()
        setSelected(selectedItem)
    }, [])

    const standardizeItems = () => {
        if (labelBy) {
            set_items(
                items.map(i => {
                    i.name = labelBy(i)
                    return i
                })
            )
        }
        if (valueBy) {
            set_items(
                items.map(i => {
                    i.value = valueBy(i)
                    return i
                })
            )
        }
    }

    const generateItems = () => {
        if (labelBy) {
            return items.map((item, idx) => (
                <DropdownItem value={item.value} key={idx} onClick={e => onSelect(e.target.value)}>
                    {item.name}
                </DropdownItem>
            ))
        }
    }

    return (
        <UncontrolledDropdown style={{width: "100%"}}>
            <DropdownToggle caret>{getLabel()}</DropdownToggle>
            <DropdownMenu style={{overflowY: "scroll", height: "20vh"}}>{generateItems()}</DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default SelectField
