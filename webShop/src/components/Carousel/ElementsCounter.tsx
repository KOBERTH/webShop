
const ElementsCounter = ({totalElements, currentElement}: {totalElements: number, currentElement: number}) => (
  <div className="bg-neutral-900 text-neutral-100 p-2 text-sm md:text-base lg:text-xl absolute right-4 top-4 flex gap-2 rounded-lg">
    <span>{currentElement}</span>
    <span>/</span>
    <span>{totalElements}</span>
  </div>
)

export default ElementsCounter