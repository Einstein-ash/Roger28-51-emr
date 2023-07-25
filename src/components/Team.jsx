import React from 'react'
import '../assets/css/TeamCard.css';
import { useState } from 'react';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import img1 from "../assets/images/Team_Profile/priyanshu - Priyanshu Narwaria.jpg";
import img2 from "../assets/images/Team_Profile/Priyanshi.jpeg";
import img3 from "../assets/images/Team_Profile/rathore.jpg"
import img4 from "../assets/images/Team_Profile/Kritika.jpeg"
import img5 from "../assets/images/Team_Profile/Nicky.jpg"
import img6 from "../assets/images/Team_Profile//Arpit.jpg"
import img7 from "../assets/images/Team_Profile/Ritesh.jpg"
import img8 from "../assets/images/Team_Profile/deepan.jpg"

const cardData=[
{
"name":"Priyanshu Narwaria",
"insta":"https://www.instagram.com/napshot_priyanshu/",
"linkedin":"https://www.linkedin.com/in/priyanshu-narwaria-153874201/",
"github":"https://github.com/napshotpriyanshu",
"image":img1
},
{
  "name":"Priyanshi ",
  "insta":"https://instagram.com/priyanshirao_18?igshid=MjEwN2IyYWYwYw==",
  "linkedin":"https://www.linkedin.com/in/priyanshi-rao13/",
  "github":"https://github.com/priyanshiRao",
  "image":img2

  },
{
    "name":"Sunil Singh Rathore ",
    "insta":"https://www.instagram.com/rathore._.15/",
    "linkedin":"https://www.linkedin.com/in/sunil-singh-rathore-4a1831202",
    "github":"https://github.com/itsrathore15",
    "image":img3


},
{
 "name":"Kritika Mittal",
  "insta":"",
  "linkedin":"https://www.linkedin.com/in/kritika-mittal-3a6182238/",
  "github":"https://github.com/m-kritika",
  "image":img4

  },
{
    "name":"Nicky",
    "insta":"https://instagram.com/n.i.c.k.y_singh?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin":"https://www.linkedin.com/in/nicky-singh-a666881b6",
    "github":"https://github.com/NickySingh44",
"image":img5
},
{
  "name":"Arpit Bhatnagar",
  "insta":"https://www.instagram.com/bhatnagar.arpit2021/",
  "linkedin":"linkedin.com/in/arpit-bhatnagar-529213221/",
  "github":"github.com/Sheldon38",
  "image":img6

  },
  {
    "name":"Madishetty Ritesh ",
    "insta":"",
    "linkedin":"https://www.linkedin.com/in/ritesh-madishetty-a36844202",
    "github":"",
    "image":img7,

    },
{
      "name":"Deepan Adak",
      "insta":"https://www.instagram.com/deepan_adak/",
      "linkedin":"https://www.linkedin.com/in/deepan-adak/",
      "github":"https://github.com/mr-prometheus",
      "image":img8,

}      







]

















const Card = () => {
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const rotateX = useTransform(y, [-100, 100], [30, -30]);
  // const rotateY = useTransform(x, [-100, 100], [-30, 30]);
const [visit1,setVisit1]=useState(false);
const [visit2,setVisit2]=useState(false);
const [visit3,setVisit3]=useState(false);








  return (<div className="bod">
    <div className='title'>Member</div> 
<div className='wrapper' style={{ perspective: 3000 }}>
{cardData.map((item,index)=>(
  <div className='Card'>
<div className='imgbox'>
<img src={item.image} alt="" className='img'/>
</div>
<div className='details'>
<h3>{item.name}</h3>   
<p>Secert Agent</p>
<div className='socialicons'>
<a href={item.linkedin}
target="_blank" rel="noopener noreferrer"
onClick={()=>{setVisit1(true);}}
>

<FontAwesomeIcon icon={faLinkedinIn}
onClick={()=>{setVisit1(true);
setTimeout(()=>{setVisit1(false)},3000)
}}







flip={visit1} />
</a>


<a href={item.github}
target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon icon={faGithub} flip={visit2} 
onClick={()=>{setVisit2(true);
  setTimeout(()=>{setVisit2(false)},3000)
  }}


/>
</a>
<a href={item.insta}
target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon icon={faInstagram} 
flip={visit3} 
onClick={()=>{setVisit3(true);
  setTimeout(()=>{setVisit3(false)},3000)
  }}

/>
</a>
</div>

</div>
</div>




)





)}






</div>
</div>
  
  
  )
}










export default Card
