import React from "react";
import './Inporm.css'
import termome from "../../assets/images/termome.png"
import pregnant from "../../assets/images/pregnant.png"
import headache from "../../assets/images/headache.png"


const Inporm = () => {
    return(
        <div className="back_inpor">
            <div className="inpor">
                <div className="collecion">
                    <p className="title">სამედიცინო რჩევები</p>
                    <div className="collec_1">
                        <div className="image_ground">
                            <img className="images" alt="ill" src={termome}/>
                            <div className="text">
                                <h2>ყველაფერი გრიპის შესახებ</h2>
                                <p className="text_12">გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა. გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა.</p>
                            </div>
                        </div>
                        <div className="image_ground">
                            <img className="images" alt="ill" src={pregnant}/>
                            <div className="text">
                                <h2>ყველაფერი გრიპის შესახებ</h2>
                                <p className="text_12">გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა. გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა.</p>
                            </div>
                        </div>
                        <div className="image_ground">
                            <img className="images" alt="ill" src={headache}/>
                            <div className="text">
                                <h2>ყველაფერი გრიპის შესახებ</h2>
                                <p className="text_12">გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა. გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inporm