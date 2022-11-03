import ProjectCard from "../Common/ProjectCard"
import { Staredprojectsdata } from "../../data/projectsdata"



const Star = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {Staredprojectsdata.map(item => <ProjectCard key={item.name} linkto={item.linkto} imgSrc={item.imgSrc} imgAlt={item.imgAlt} name={item.name} text={item.text} />)}
    </div>
  )
}

export default Star