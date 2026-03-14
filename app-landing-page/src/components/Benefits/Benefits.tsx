import BenefitSection from "./BenefitSection"
import SectionTitle from "../SectionTitle"

import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <div id="features" className="pt-24 lg:pt-32">
            <SectionTitle>
                <h2 className="text-center mb-16">What do we offer</h2>
            </SectionTitle>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits