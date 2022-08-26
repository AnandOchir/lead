import { Typography } from 'components'
import React, { useEffect, useState, ReactElement, FC } from 'react'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  name: string
}

export const Information: FC = ({ datas }: any): ReactElement => {
  const [rightBar, setRightBar] = useState<any>({
    tailbar: false,
    zorilgo: false,
    zuils: false,
    cont: false,
  })
  const [read, setRead] = useState<boolean>(true)
  const [data, setData] = useState<any>()
  const information = datas.items.filter((value: any) => Object.keys(value).length !== 0)

  const DetailedInfo = (props: Props) => {
    const { onClick, children, name } = props

    const getClass = (props: string) => {
      switch (props) {
        case 'info':
          return 'p-2 hover:border-l-4 border-primary-main'
      }
    }

    return (
      <div className={`${getClass(name)}`} onClick={onClick}>
        {children}{' '}
      </div>
    )
  }

  const infos = {
    tailbar: {
      title: information[0].option,
      info: information[0].info,
    },
    zorilgo: {
      title: information[1].option,
      info: information[1].info,
    },
    zuils: {
      title: information[2].option,
      info: information[2].info,
    },
    cont: {
      title: information[3].option,
      info: information[3].info,
    },
  }

  const getInfos = () => {
    return rightBar.tailbar
      ? setData(infos.tailbar)
      : rightBar.zorilgo
      ? setData(infos.zorilgo)
      : rightBar.zuils
      ? setData(infos.zuils)
      : rightBar.cont
      ? setData(infos.cont)
      : setData({
          title: 'Тайлбар',
          info: 'ЛИЙД Төгсөгчдийн Холбоо (ЛТХ)-ны анхны удирдлагын баг нь 2018-2019 онд 11 гишүүний бүрэлдэхүүнтэй, ТУЗ-ийн даргаар М.Золжаргал (US 2017) сонгогдон ажилласан юм. 2018 оны 7-р сард албан ёсоор төрийн бус байгууллага болон үүсгэн байгуулагдсан цагаас холбооны стратегийн тэргүүлэх чиглэлийг тодорхойлох, байгууллагын бүтэц, соёлыг ул суур...',
        })
  }

  const toggleRead = () => {
    setRead(!read)
  }

  const option1 = () => {
    setRightBar({ zorilgo: false, zuils: false, cont: false, tailbar: true })
  }

  const option2 = () => {
    setRightBar({ zorilgo: true, zuils: false, cont: false, tailbar: false })
  }

  const option3 = () => {
    setRightBar({ zorilgo: false, zuils: true, cont: false, tailbar: false })
  }

  const option4 = () => {
    setRightBar({ zorilgo: false, zuils: false, cont: true, tailbar: false })
  }

  useEffect(() => {
    getInfos()
  }, [rightBar])

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-leadScreen mb-[88.75px]">
        <Typography variant="title1" className="md:flex  absolute justify-center">
          {data && data.title}
        </Typography>
        <div className="flex md:flex-row  flex-col border-t-2 border-[#0F233E] border-opacity-10 w-100 md:w-[66%] mt-3.5 pt-2">
          <Typography variant="body" className="flex flex-col leading-7 mt-5 gap-3">
            {data && data.info && read ? data.info.slice(0, 190) : data && data.info ? data.info : 'ret'}
            <Typography variant="body" className="flex text-primary-main cursor-pointer" onClick={toggleRead}>
              {read ? 'Дэлгэрэнгүй' : 'Буцаах'} <img src="/static/arrow.svg" alt="" className="w-6 h-6 mt-1" />{' '}
            </Typography>{' '}
          </Typography>
        </div>
        <div className="flex flex-col md:justify-end md:w-[288px]  mt-[50px] md:m-0 md:ml-[130px] h-fit bg-[#F7F7F7] cursor-pointer">
          <DetailedInfo name="info" onClick={option1}>
            <Typography variant="body" className="pointer-events-none">
              Тайлбар{' '}
            </Typography>{' '}
          </DetailedInfo>
          <div className="border-b-2"> </div>
          <DetailedInfo name="info" onClick={option2}>
            <Typography variant="body" className="pointer-events-none">
              Зорилго{' '}
            </Typography>{' '}
          </DetailedInfo>
          <div className="border-b-2"> </div>
          <DetailedInfo name="info" onClick={option3}>
            <Typography variant="body" className="pointer-events-none">
              Хийсэн зүйлс{' '}
            </Typography>{' '}
          </DetailedInfo>
          <div className="border-b-2"> </div>
          <DetailedInfo name="info" onClick={option4}>
            {' '}
            <Typography variant="body" className="pointer-events-none">
              {' '}
              Үргэлжлэл бий{' '}
            </Typography>{' '}
          </DetailedInfo>
          <div className="border-b-2"> </div>
        </div>
      </div>
    </>
  )
}

export default Information
