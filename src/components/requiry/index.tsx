import Typo from 'components/typography'

type Props = {
  numbers: string
  info: string
}

export const Requirements = () => {
  const Items = (props: Props) => {
    return (
      <div className="ml-5">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col justify-start items-center">
            <Typo variant="h2"> {props.numbers} </Typo>
            <div className="bg-primary-main w-4 h-1"></div>
          </div>
          <Typo className="mt-2" variant="body">
            {props.info}
          </Typo>
        </div>
      </div>
    )
  }
  const Info = [
    'LEAD Mongolia хөтөлбөрийн зорилго, хамрах сэдэвтэй холбоотой 5 болон түүнээс дээш жилийн ажлын туршлагатай.',
    'Хөтөлбөрийн туршид зохион байгуулах сургалт болон арга хэмжээний үеэр олж авсан мэдлэг туршлагад үндэслэн нийгэмд эерэг өөрчлөлт авчрах.',
    'Бодлогын түвшинд нөлөөлөх төсөл боловсруулж, хэрэгжүүлэх чадвартай байх шаардлага тавина.',
  ]
  return (
    <div className="flex flex-col gap-10 md:bg-[#F5FAFF] bg-[white] pt-[96px] pb-[120px]  md:mt-[160px] md:mb-[141px]  ">
      <div className="mx-auto max-w-leadScreen">
        <div>
          <Typo variant="h3" className="ml-[50px] md:ml-[30px] mb-[40px]">
            Шаардлага
          </Typo>
        </div>
        <div className="flex flex-col gap-10 md:flex-row justify-center w-full">
          {Info.map((el: string, ind: number) => {
            return <Items key={ind} numbers={`0${ind + 1}`} info={el} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Requirements
