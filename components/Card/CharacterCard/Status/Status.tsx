import React from 'react';
import Image, {StaticImageData} from "next/image";

type PropsType = {
  src: StaticImageData
}

const Status = (props: PropsType) => {
  const {src} = props

  return (
    <Image src={src} alt={'Status'} width={20} height={20}/>
  );
};

export default Status;
