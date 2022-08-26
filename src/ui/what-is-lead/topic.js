import { Typography } from 'components'
import Lottie from 'react-lottie'
import greenhouse from '../../../public/static/greenhouse.json'
import coin from '../../../public/static/coins.json'
import demand from '../../../public/static/demand.json'

export const Topic = () => {
  return (
    <div className="flex md:gap-[59px] w-full md:mt-[0] mt-[115.42px] md:mb-[215px] mb-[70px]  max-w-leadScreen mx-auto relative">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-6 w-full items-center  md:items-start">
          <Typography variant="h3" className="text-center md:text-left">
            Бидний баздаг сэдэвүүд
          </Typography>
          <Typography variant="body" className="w-[296px] md:w-[596px]  ">
            Доорх сэдвийн хүрээнд төвлөрөх бөгөөд хөтөлбөрийн оролцогчид эдгээрээс аль нэг сэдвийг сонгон төсөл
            хэрэгжүүлэх юм. Оролцогч төсөл хэрэгжүүлэхэд шаардлагатай ур чадварыг эзэмшүүлэх шаталсан сургалтад
            хамрагдана.
          </Typography>
        </div>
        <div className="flex flex-col gap-6 w-full items-start md:pl-0 pl-[30px] ">
          <div className="flex h-16 gap-4">
            <div className="w-16 bg-bgGrey1 rounded-full flex justify-center items-center">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: greenhouse,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                width={40}
                height={40}
              />
            </div>
            <Typography variant="body-semibold" className="h-16 flex items-center">
              Байгаль орчин, хотжилт
            </Typography>
          </div>
          <div className="flex h-16 gap-4">
            <div className="w-16 bg-bgGrey1 rounded-full flex justify-center items-start ">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: coin,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                width={40}
                height={40}
              />
            </div>
            <Typography variant="body-semibold" className="h-16 flex items-center">
              Авлигатай тэмцэх, ил тод байдлыг сайжруула
            </Typography>
          </div>
          <div className="flex h-16 gap-4">
            <div className="w-16 bg-bgGrey1 rounded-full flex justify-center items-center">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: demand,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                width={40}
                height={40}
              />
            </div>
            <Typography variant="body-semibold" className="h-16 flex items-center">
              Ажилгүйдэл, ядуурлыг бууруулах
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-[702px] hidden md:block absolute -top-[150px] left-[600px] 2xl:block">
        <img src="/static/topic.webp" />
      </div>
    </div>
  )
}

export default Topic
