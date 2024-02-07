import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,refrence}) {
  return (
    <div>
        <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.1}} className='card'>

          <div className="card-Body">
            <FaRegFileAlt />
            <p>{data.desc}</p>
          </div>

          <div className='logomb'>
              <h5>{data.fileSize}</h5>
              <span>
                {data.close? <IoClose /> : <MdOutlineFileDownload />}
              </span>
          </div>

          <div>
            {data.tag.isOpen ? (
              <div className='card-Footer' style={{backgroundColor : data.tag.tagColor}}>
                <h3>{data.tag.tagTitle}</h3>
              </div>
            ) : 
            (
              <div className='card-Footer' style={{backgroundColor : data.tag.tagColor}}>
              <h3>{data.tag.tagTitle}</h3>
          </div>
            )}
          </div>
        </motion.div>
    </div>
  )
}

export default Card