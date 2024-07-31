import DayButtonGroup from "../../components/DayButtonGroup";

const Daily = () => {
  return (
    <div className='pt-24 px-4 max-w-[1468px] mx-auto mt-0 mr-auto ml-auto flex flex-col'>
      <p className='text-[1.65rem] font-semibold mb-4'>요일별 신작</p>
      <DayButtonGroup isHomePage={false} />
    </div>
  );
}

export default Daily;
