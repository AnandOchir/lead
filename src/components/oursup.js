/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Typography } from 'components'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Support = ({ className }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`mt-[100px] max-w-leadScreen mx-auto ${className}`}>
      <Typography variant={matches ? 'body-mobile' : 'h1'} className="flex justify-center text-center text-[#0F233E]">
        Биднийг дэмжигч, хамтрагч байгууллагууд
      </Typography>

      <div className="mt-7 flex flex-col items-center">
        <Typography variant="body" className="text-[#0F233E] text-center md:w-[488px]">
          Бид ардчилал, хүний эрх, залуусын оролцоог дэмжигч дотоод, гадаадын байгууллагуудтай идэвхитэй хамтран
          ажилладаг
        </Typography>
        <div className="flex justify-center items-center md:items-start xl:flex-row flex-col gap-20 mt-[83px] mb-[170px]">
          <a href="https://www.iri.org/" target="_blank">
            <img
              src="https://www.iri.org/wp-content/uploads/2022/01/IRI_logotype.png"
              className="md:w-[420px] md:h-[95px] w-[304px] cursor-pointer"
            />
          </a>
          <a href="https://www.worldlearning.org/" target="_blank">
            <img
              src="https://monarch2monarch.org/wp-content/uploads/2022/02/image-7.png"
              className="md:w-[420px]   md:h-[96px] w-[304px] cursor-pointer"
            />
          </a>
          <a href="https://www.usaid.gov/" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/2560px-USAID-Identity.svg.png"
              className="md:w-[420px]  md:h-[93px] w-[304px] cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Support
