import Expandable from "./components/Expandable";

const CompoundComponent = () => {
    return (
        <>
            <h1>Expandable</h1>
            <Expandable onExpand={() => console.log("Banana")}>
                <Expandable.Header>
                    <p> Compound Hook Component </p>
                </Expandable.Header>
                <Expandable.Icon/>
                <Expandable.Body> Secrets! </Expandable.Body>
            </Expandable>
        </>
    )
}

export default CompoundComponent