import Link from 'next/link';
import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/vanthinh01052001" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mai-văn-thinh-b24681288",
  },
];
interface ISocialProps{
    containerStyles?: string;
    iconStyles?: string;
}
const Social = ({containerStyles, iconStyles}: ISocialProps) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((item, index) =>(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))
        }
    </div>
  )
}

export default Social