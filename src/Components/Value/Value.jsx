import React, {useState} from 'react';
import './Value.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion.jsx';

const Value = () => {
    const [className, setClassName] = useState(null);
  return (
   <section className='v-wrapper'>
    <div className='paddings innerWidth flexCenter v-container'>
        { /* Left Side */ }
        <div className='v-left'>
            <div className='image-container'>
                <img src='./value.png' alt='value'/>
            </div>
        </div>

        {/* Right Side */}
        <div className='flexColStart v-right'>
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We give to You</span>
            <span className='secondaryText'>We are always ready help to providing the best service for You
                <br />
                We believe a good place to live can make your life better
            </span>

            <Accordion className='accordion'
            allowZeroExpanded={false} preExpanded={[0]}
            >
                {data.map((item, i) => {
                        return (
                         <AccordionItem key={i} uuid={i} className={`accordionItem ${expandedIndex === i ? 'expanded' : 'collapsed'}`}>
                        <AccordionItemHeading>
                            <AccordionItemButton className='flexCenter accordion-button'>

                                <AccordionItemState>
                                    {({expanded}) => expanded ? setClassName("expandedIndex") : setClassName('collapsed')}
                                </AccordionItemState>

                                <div className='flexCenter icon'>{item.icon}</div>
                                <span className='primaryText'>{item.heading}</span>
                                <div className='flexCenter arrow'>
                                    <MdOutlineArrowDropDown size={20}/>
                                </div>
                                </AccordionItemButton>

                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className='secondaryText'>{item.detail}</p>
                        </AccordionItemPanel>
                        </AccordionItem>
                )
                    }
                        
                )
}

            </Accordion>
        </div>
    </div>
   </section>
  )
}

export default Value
