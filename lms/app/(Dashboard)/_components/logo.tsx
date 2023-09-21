import Image from "next/image"

function Logo() {
  return (
    <Image src={"/logo.svg"} width={130} height={130} alt="logo" />
  )
}

export default Logo