import '../App.css';
import React from "react";


const BulletPoints = ({bullets}) => { 
    return (
        <ul>
            {React.Children.toArray(bullets.map(entry => <li>{entry}</li>))}
        </ul>
    )  
}

const ContentCard  = ({title, bullets, link, linkText}) => { 
    return (
        <div style={{height:'auto', borderStyle:'solid', borderWidth:'0.1em', borderRadius:'0.6em', marginBottom:'1%'}}>
            <div className='cardTitle' style={{marginLeft:'2.5%'}}>
                <p>{title}</p>

            </div>
            
            <hr className='cardLine' style={{width:'95%'}}/>
            <div className='cardContent' style = {{}}>
                 <BulletPoints bullets={bullets}></BulletPoints>

            </div>

            {link !== undefined ? 
                <div className='cardLink' style = {{textAlign:'right', marginRight:'1%'}}>
                    <a href={link} target="_blank" rel="noreferrer" >{linkText}</a>

                 </div> : 
                 
                 <div />}


        </div>

    )
}

export default ContentCard