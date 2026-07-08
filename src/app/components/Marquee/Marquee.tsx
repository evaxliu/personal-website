import { marqueeList } from './Marquee-text'

type MarqueeProps = {
  texts?: { bullet: string; text: string; color: string }[]
}

const Marquee: React.FC<MarqueeProps> = ({ texts = marqueeList }) => {
  const filledTexts = [...texts, ...texts, ...texts]

  return (
    <div className="w-full overflow-hidden border border-x-0 border-t-[#2b2148] border-b-[#2b2148]">
      <div className="flex w-max animate-marquee py-3">
        <div className="flex shrink-0 items-center gap-4 pr-4 lg:gap-10 lg:pr-10 font-plex-mono">
          {filledTexts.map(({ bullet, text, color }, index) => (
            <p
              key={`first-${index}`}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm text-[#8f82b0]"
            >
              <span className={color}>{bullet}</span>
              <span>{text}</span>
            </p>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-4 pr-4 lg:gap-10 lg:pr-10 font-plex-mono">
          {filledTexts.map(({ bullet, text, color }, index) => (
            <p
              key={`second-${index}`}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm text-[#8f82b0]"
            >
              <span className={color}>{bullet}</span>
              <span>{text}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee