import {createContext, useCallback, useMemo, useState} from "react";

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
    const toggleExpanded = useCallback(() => setExpanded(prevExpanded => !prevExpanded), [])
    const value = useMemo(() => ({expanded, toggleExpanded}), [expanded, toggleExpanded()])
    
    return (
        <>
            <Provider value={value}>
                {children}
            </Provider>
        </>
    )
}


export default CompoundComponent