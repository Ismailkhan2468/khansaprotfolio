 import btnlogo from '../assets/code.png'
 

const card = (props) => {
    return (

        <div className={props.pictureVisible ? 'card-ui' : 'education-card-ui'}>
            {props.pictureVisible &&
                <div className='cardPicture'>
                    <img src={props.projectPicture} />
                </div>
            }

            <h1>{props.projectTitle}</h1>
            <p>{props.projectDesc}</p>
            {props.yearVisible && <span>{props.year}</span>}

            {props.isButtonVisible &&
                <div className='card-btn-main'>
                    <a href={props.projectLiveUrl} target='_blank'>
                        <button className='card-btn' >Undiployed </button>
                    </a>

                    <a href={props.projectCode} target='_blank'>
                        <button className='card-btn' >Code <span><img src={btnlogo} /></span></button>
                    </a>
                </div>
            }

        </div>

    )
}

export default card
