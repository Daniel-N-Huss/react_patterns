import {createContext, useState} from "react";

const CompoundComponent = () => {
    return (
        <Expandable>
            <p>Expandable</p>
            <p>Header</p>
            <p>Button</p>
            <p>Body</p>
        </Expandable>
    )
}

const Expandable = ({children}) => {
    const ExpandableContent = createContext()
    const {Provider} = ExpandableContent

    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <Provider>
                {children}
            </Provider>
        </>
    )
}


export default CompoundComponent