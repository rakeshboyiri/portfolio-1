
import { WavyBackgroundDemo } from './WavyBackgroundDemo'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center w-full">
      <div >
        {/* Move WavyBackgroundDemo containing the image above the text */}
        <WavyBackgroundDemo />      
      </div>
    </section>
  )
}

export default Hero
