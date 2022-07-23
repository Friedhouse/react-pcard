import PrefCard from "./PrefCard";

const PrefCardList = ({prefCardList}) => {
    return (
        <>
            {prefCardList.map(prefcard => {
                return (
                    <PrefCard prefcard={prefcard} />
                )
            })}
        </>
    )
}

export default PrefCardList;