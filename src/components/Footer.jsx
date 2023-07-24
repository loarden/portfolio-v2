import FooterIcon from "./FooterIcon"
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si"

const footerIcons = [
  {
    icon: <SiGithub />,
    link: 'https://github.com/loarden'
  },
  {
    icon: <SiLinkedin />,
    link: 'https://linkedin.com/in/örs-biacsi-345b3b239/'
  },
  {
    icon: <SiGmail />,
    link: 'mailto:biacsi.ors@gmail.com'
  },
]

function Footer() {
  return (
    <footer className="w-full bg-primary h-80 flex flex-col justify-center items-center text-background px-4">
      <h3>Create something incredible.</h3>
      <div className="text-2xl flex gap-8 my-10">
        {
          footerIcons.map((item, index) => {
            return (
              <FooterIcon key={index} link={item.link}>
                {item.icon}
              </FooterIcon>
            )
          })
        }
      </div>
      <p>© 2023 Biacsi Ors</p>
    </footer>
  )
}

export default Footer